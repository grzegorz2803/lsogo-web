import { useState } from "react";
import { MessageThreadList } from "../../components/UserMessages/MessageThreadList";
import { PanelPageHeader } from "../../components/Panel/PanelPageHeader";
import { userMessagesContent } from "../../content/userMessages";
import { useSearchParams } from "react-router-dom";
import {
  userMessagesMock,
  type MessageThreadType,
} from "../../mocks/userMessagesMock";
import { MessageThreadView } from "../../components/UserMessages/MessageThreadView";

export default function UserMessagesPage() {
  const [threads, setThreads] = useState(userMessagesMock);
  const [isMobileThreadOpen, setIsMobileThreadOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const threadFromUrl = searchParams.get("thread");
  const [selectedThread, setSelectedThread] = useState<MessageThreadType>(
    threadFromUrl === "animator" ? "animator" : "guardian",
  );

  const activeThread = threads.find((thread) => thread.id === selectedThread);
  function handleSelectThread(thread: MessageThreadType) {
    setSelectedThread(thread);
    setIsMobileThreadOpen(true);
  }
  function handleSendMessage(content: string) {
    setThreads((currentThreads) =>
      currentThreads.map((thread) =>
        thread.id === selectedThread
          ? {
              ...thread,
              messages: [
                ...thread.messages,
                {
                  id: Date.now(),
                  sender: "user" as const,
                  content,
                  date: new Date().toLocaleDateString("pl-PL"),
                  time: new Date().toLocaleTimeString("pl-PL", {
                    hour: "2-digit",
                    minute: "2-digit",
                  }),
                },
              ],
            }
          : thread,
      ),
    );
  }
  return (
    <>
      <div className="min-w-0">
        <PanelPageHeader
          title={userMessagesContent.title}
          subtitle={userMessagesContent.subtitle}
        />
        <div className="mt-6 grid min-w-0 grid-cols-1 gap-6 md:mt-8 md:grid-cols-[320px_minmax(0,1fr)]">
          <div
            className={
              isMobileThreadOpen ? "hidden min-w-0 md:block" : "block min-w-0"
            }
          >
            <MessageThreadList
              threads={threads}
              selectedThread={selectedThread}
              onSelectThread={handleSelectThread}
            />
          </div>
          {activeThread && (
            <div className={isMobileThreadOpen ? "block" : "hidden md:block"}>
              <MessageThreadView
                thread={activeThread}
                onSendMessage={handleSendMessage}
                onBack={() => setIsMobileThreadOpen(false)}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
