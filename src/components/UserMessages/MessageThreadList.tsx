import type {
  MessageThreadType,
  UserMessageThread,
} from "../../mocks/userMessagesMock";

type MessageThreadListProps = {
  threads: UserMessageThread[];
  selectedThread: MessageThreadType;
  onSelectThread: (thread: MessageThreadType) => void;
};

export function MessageThreadList({
  threads,
  selectedThread,
  onSelectThread,
}: MessageThreadListProps) {
  return (
    <div className="min-w-0 space-y-3">
      {threads.map((thread) => {
        const lastMessage = thread.messages.at(-1);
        const isActive = selectedThread === thread.id;

        return (
          <button
            key={thread.id}
            type="button"
            onClick={() => onSelectThread(thread.id)}
            className={`min-w-0 w-full cursor-pointer overflow-hidden rounded-2xl border p-4 text-left transition ${
              isActive
                ? "border-amber-400/25 bg-amber-400/5"
                : "border-white/10 bg-slate-950/25 hover:border-white/20"
            }`}
          >
            <p className="font-medium text-slate-100">{thread.recipientRole}</p>
            <p className="mt-1 text-sm text-slate-400">
              {thread.recipientName}
            </p>
            {lastMessage && (
              <p className="mt-3 truncate text-sm text-slate-500">
                {lastMessage.content}
              </p>
            )}
          </button>
        );
      })}
    </div>
  );
}
