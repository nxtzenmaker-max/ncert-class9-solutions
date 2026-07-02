import { useEffect, useRef, useState } from "react";
import { Sparkles, X, Send, Loader2, Trash2 } from "lucide-react";
import {
  askRox,
  loadRoxHistory,
  saveRoxHistory,
  clearRoxHistory,
  type RoxMessage,
} from "@/lib/rox";

export default function RoxWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<RoxMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages(loadRoxHistory());
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open, loading]);

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
          content: "Kuch gadbad ho gayi, thodi der baad try karo 🙏",
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

  return (
    <>
      {/* Floating round toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Rox AI"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/30 transition-transform hover:scale-105 active:scale-95"
      >
        {open ? <X size={24} /> : <Sparkles size={24} />}
      </button>

      {/* Chat overlay */}
      {open && (
        <div className="fixed inset-0 z-40 flex items-end justify-end bg-black/30 sm:items-center sm:justify-end sm:p-6">
          <div className="flex h-[85vh] w-full flex-col rounded-t-2xl bg-white shadow-2xl dark:bg-neutral-900 sm:h-[70vh] sm:w-96 sm:rounded-2xl">
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
                  onClick={() => setOpen(false)}
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
                  Hi! Main Rox hoon 👋 <br /> Padhai se juda koi bhi sawaal poochho.
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
                    <Loader2 size={14} className="animate-spin" /> Rox soch raha hai...
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
                placeholder="Apna sawaal likho..."
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
