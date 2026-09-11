import { useState } from "react";
import { Send } from "lucide-react";

import type { UserMessageThread } from "../../mocks/userMessagesMock";
import { userMessagesContent } from "../../content/userMessages";

type MessageThreadViewProps = {
  thread: UserMessageThread;
  onSendMessage: (contnet: string) => void;
};

export function MessageThreadView({
  thread,
  onSendMessage,
}: MessageThreadViewProps) {
  const [message, setMessage] = useState("");

  const trimedMessage = message.trim();
  const canSend = trimedMessage.length > 0;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSend) return;
    onSendMessage(trimedMessage);
    setMessage("");
  }

  return (
    <div className="flex min-h-130 flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/25">
      <div className="border-b border-white/10 px-6 py-5">
        <h2 className="font-medium text-slate-100">{thread.recipientRole}</h2>
        <p className="mt-1 text-sm text-slate-400">{thread.recipientName}</p>
      </div>
      <div className="flex-1 space-y-4 overflow-y-auto p-6">
        {thread.messages.length === 0 ? (
          <p className="text-center text-sm text-slate-500">
            {userMessagesContent.emptyConversation}
          </p>
        ) : (
          thread.messages.map((message) => {
            const isUser = message.sender === "user";
            return (
              <div
                key={message.id}
                className={`flex ${isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                    isUser
                      ? "border border-amber-400/20 bg-amber-400/10 text-slate-100"
                      : "border border-white/10 bg-slate-900/70 text-slate-200"
                  }`}
                >
                  <p
                    className={`mb-1 text-xs font-medium ${
                      isUser ? "text-amber-300" : "text-slate-400"
                    }`}
                  >
                    {isUser ? "Ty" : thread.recipientRole}
                  </p>
                  <p className="text-sm leading-6">{message.content}</p>
                  <p
                    className={`mt-2 text-xs ${
                      isUser ? "text-amber-200/60" : "text-slate-500"
                    }`}
                  >
                    {message.date} · {message.time}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>

      <form onSubmit={handleSubmit} className="border-t border-white/10 p-4">
        <div className="flex gap-3">
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder={userMessagesContent.inputPlaceholder}
            rows={2}
            maxLength={1000}
            className="min-h-14 flex-1 resize-none rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-amber-400/30"
          />
          <button
            type="submit"
            disabled={!canSend}
            className="flex cursor-pointer items-center gap-2 self-end rounded-xl bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-40 "
          >
            <Send className="h-4 w-4" />
            {userMessagesContent.send}
          </button>
        </div>
      </form>
    </div>
  );
}
