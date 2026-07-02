import { useEffect, useRef, useState } from "react";
import { Sparkles, X, Send, Loader2, Trash2 } from "lucide-react";
import {
  askRox,
  loadRoxHistory,
  saveRoxHistory,
  clearRoxHistory,
  type RoxMessage,
} from "@/lib/rox";

type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";
type PanelState = "closed" | "entering" | "open" | "exiting";

const BTN_SIZE = 56; // h-14 w-14
const MARGIN = 20; // matches previous bottom-5/right-5 (1.25rem)

function cornerToStyle(corner: Corner): React.CSSProperties {
  const style: React.CSSProperties = { position: "fixed" };
  corner.includes("top") ? (style.top = MARGIN) : (style.bottom = MARGIN);
  corner.includes("left") ? (style.left = MARGIN) : (style.right = MARGIN);
  return style;
}

function nearestCorner(x: number, y: number): Corner {
  const vertical = y < window.innerHeight / 2 ? "top" : "bottom";
  const horizontal = x < window.innerWidth / 2 ? "left" : "right";
  return `${vertical}-${horizontal}` as Corner;
}

export default function RoxWidget() {
  const [panelState, setPanelState] = useState<PanelState>("closed");
  const [messages, setMessages] = useState<RoxMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [corner, setCorner] = useState<Corner>("bottom-right");
  const [dragStyle, setDragStyle] = useState<React.CSSProperties | null>(null);
  const draggingRef = useRef(false);
  const movedRef = useRef(false);
  const startRef = useRef({ x: 0, y: 0 });
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMessages(loadRoxHistory());
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, panelState, loading]);

  function openPanel() {
    setPanelState("entering");
    requestAnimationFrame(() => requestAnimationFrame(() => setPanelState("open")));
  }

  function closePanel() {
    setPanelState("exiting");
    window.setTimeout(() => setPanelState("closed"), 200);
  }

  function togglePanel() {
    if (panelState === "closed" || panelState === "exiting") openPanel();
    else closePanel();
  }

  async function handleSend() {
    const text = input.trim();
    if (!text || loading) return;

    const next: RoxMessage[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    saveRoxHistory(next);
    setInput("");
    setLoading(true);

    try {
      const reply = await askRox(next);
      const withReply: RoxMessage[] = [...next, { role: "assistant", content: reply }];
      setMessages(withReply);
      saveRoxHistory(withReply);
    } catch (err) {
      const withErr: RoxMessage[] = [
        ...next,
        {
          role: "assistant",
          content: "Something went wrong, please try again in a moment 🙏",
        },
      ];
      setMessages(withErr);
      saveRoxHistory(withErr);
    } finally {
      setLoading(false);
    }
  }

  function handleClear() {
    setMessages([]);
    clearRoxHistory();
  }

  // ---- Drag to reposition + snap to nearest corner ----
  function handlePointerDown(e: React.PointerEvent<HTMLButtonElement>) {
    draggingRef.current = true;
    movedRef.current = false;
    startRef.current = { x: e.clientX, y: e.clientY };
    btnRef.current?.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e: React.PointerEvent<HTMLButtonElement>) {
    if (!draggingRef.current) return;
    const dx = e.clientX - startRef.current.x;
    const dy = e.clientY - startRef.current.y;
    if (Math.abs(dx) > 6 || Math.abs(dy) > 6) movedRef.current = true;
    if (!movedRef.current) return;

    const half = BTN_SIZE / 2;
    const x = Math.min(Math.max(e.clientX, half), window.innerWidth - half);
    const y = Math.min(Math.max(e.clientY, half), window.innerHeight - half);

    setDragStyle({
      position: "fixed",
      left: x - half,
      top: y - half,
      right: "auto",
      bottom: "auto",
      transition: "none",
    });
  }

  function handlePointerUp(e: React.PointerEvent<HTMLButtonElement>) {
    draggingRef.current = false;
    btnRef.current?.releasePointerCapture(e.pointerId);

    if (movedRef.current) {
      setCorner(nearestCorner(e.clientX, e.clientY));
      setDragStyle(null);
    } else {
      togglePanel();
    }
  }

  const isOpenish = panelState === "entering" || panelState === "open";
  const btnStyle = dragStyle ?? {
    ...cornerToStyle(corner),
    transition: "top .3s ease, bottom .3s ease, left .3s ease, right .3s ease",
  };

  return (
    <>
      {/* Floating round toggle button — draggable, snaps to nearest corner */}
      <button
        ref={btnRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        style={{ ...btnStyle, touchAction: "none" }}
        aria-label="Rox AI"
        className="z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/30 active:scale-95"
      >
        <Sparkles size={24} />
      </button>

      {/* Chat overlay */}
      {panelState !== "closed" && (
        <div
          className="fixed inset-0 z-40 flex items-end justify-end bg-black/30 transition-opacity duration-200 sm:items-center sm:justify-end sm:p-6"
          style={{ opacity: isOpenish ? 1 : 0 }}
        >
          <div
            className={`flex h-[85vh] w-full flex-col rounded-t-2xl bg-white shadow-2xl transition-all duration-200 ease-out dark:bg-neutral-900 sm:h-[70vh] sm:w-96 sm:rounded-2xl ${
              isOpenish
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-4 scale-95 opacity-0"
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between rounded-t-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-3 text-white">
              <div className="flex items-center gap-2">
                <Sparkles size={20} />
                <div>
                  <p className="font-semibold leading-tight">Rox</p>
                  <p className="text-xs text-white/80 leading-tight">Your AI study buddy</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={handleClear}
                  aria-label="Clear chat"
                  className="rounded-full p-2 hover:bg-white/15"
                >
                  <Trash2 size={16} />
                </button>
                <button
                  onClick={closePanel}
                  aria-label="Close"
                  className="rounded-full p-2 hover:bg-white/15"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
              {messages.length === 0 && (
                <div className="mt-6 text-center text-sm text-neutral-500">
                  Hi! I'm Rox 👋 <br /> Ask me anything about your studies.
                </div>
              )}
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm ${
                      m.role === "user"
                        ? "bg-violet-600 text-white rounded-br-sm"
                        : "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 rounded-bl-sm"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl rounded-bl-sm bg-neutral-100 px-3 py-2 text-sm text-neutral-500 dark:bg-neutral-800">
                    <Loader2 size={14} className="animate-spin" /> Rox is thinking...
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 border-t border-neutral-200 p-3 dark:border-neutral-800">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your question..."
                className="flex-1 rounded-full border border-neutral-300 bg-transparent px-4 py-2 text-sm outline-none focus:border-violet-500 dark:border-neutral-700"
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                aria-label="Send"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 text-white disabled:opacity-40"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
