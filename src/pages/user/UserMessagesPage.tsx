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
  const [searchParams] = useSearchParams();
  const threadFromUrl = searchParams.get("thread");
  const [selectedThread, setSelectedThread] = useState<MessageThreadType>(
    threadFromUrl === "animator" ? "animator" : "guardian",
  );
  const activeThread = threads.find((thread) => thread.id === selectedThread);

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
      <div>
        <PanelPageHeader
          title={userMessagesContent.title}
          subtitle={userMessagesContent.subtitle}
        />
        <div className="mt-8 grid grid-cols-[320px_1fr] gap-6">
          <MessageThreadList
            threads={threads}
            selectedThread={selectedThread}
            onSelectThread={setSelectedThread}
          />
          {activeThread && (
            <MessageThreadView
              thread={activeThread}
              onSendMessage={handleSendMessage}
            />
          )}
        </div>
      </div>
    </>
  );
}
