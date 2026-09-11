export type MessageSender = "user" | "guardian" | "animator";

export type UserMessage = {
  id: number;
  sender: MessageSender;
  content: string;
  date: string;
  time: string;
};

export type MessageThreadType = "guardian" | "animator";

export type UserMessageThread = {
  id: MessageThreadType;
  recipientName: string;
  recipientRole: string;
  messages: UserMessage[];
};

export const userMessagesMock: UserMessageThread[] = [
  {
    id: "guardian",
    recipientName: "ks. Tomasz",
    recipientRole: "Opiekun LSO",
    messages: [
      {
        id: 1,
        sender: "user",
        content:
          "Czy mogę zamienić służbę w najbliższą niedzielę na godzinę 11:00?",
        date: "09.09.2026",
        time: "18:20",
      },
      {
        id: 2,
        sender: "guardian",
        content:
          "Tak, nie ma problemu. Proszę tylko uzgodnić zamianę z animatorem.",
        date: "10.09.2026",
        time: "08:15",
      },
    ],
  },
  {
    id: "animator",
    recipientName: "Michał Nowak",
    recipientRole: "Animator",
    messages: [
      {
        id: 3,
        sender: "animator",
        content:
          "Przypominam, że zbiórka lektorów odbędzie się w sobotę o 10:00.",
        date: "08.09.2026",
        time: "17:45",
      },
    ],
  },
];
