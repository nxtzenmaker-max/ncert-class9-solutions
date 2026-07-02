// Rox AI - talks to our own Vercel backend (no keys live here)
const ROX_BACKEND_URL = "https://rox-backend-five.vercel.app/api/rox";

export type RoxMessage = {
  role: "user" | "assistant";
  content: string;
};

function getSessionId(): string {
  let id = localStorage.getItem("rox_session_id");
  if (!id) {
    id = Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem("rox_session_id", id);
  }
  return id;
}

export async function askRox(history: RoxMessage[]): Promise<string> {
  const res = await fetch(ROX_BACKEND_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages: history, sessionId: getSessionId() }),
  });

  if (!res.ok) {
    throw new Error(`Couldn't connect to Rox (status ${res.status})`);
  }

  const data = await res.json();
  return data?.reply || "Sorry, I had trouble generating a reply. Please try again.";
}

const STORAGE_KEY = "rox_chat_history_v1";

export function loadRoxHistory(): RoxMessage[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveRoxHistory(messages: RoxMessage[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-50)));
  } catch {
    // ignore quota errors
  }
}

export function clearRoxHistory() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}
