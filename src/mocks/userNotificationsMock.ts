export type UserNotificationType =
  | "schedule"
  | "assignment"
  | "excuse"
  | "message";

export type UserNotification = {
  id: number;
  type: UserNotificationType;
  title: string;
  message: string;
  date: string;
  time: string;
  read: boolean;
};

export const userNotificationsMock: UserNotification[] = [
  {
    id: 1,
    type: "schedule",
    title: "Zmiana w harmonogramie",
    message: "Nastąpiła zmiana w harmonogramie służby na najbliższą niedzielę.",
    date: "10.09.2026",
    time: "12:15",
    read: false,
  },
  {
    id: 2,
    type: "assignment",
    title: "Nowe przydzielenie",
    message:
      "Zostałeś przydzielony do służby podczas Mszy Świętej o godz. 9:30.",
    date: "09.09.2026",
    time: "18:40",
    read: false,
  },
  {
    id: 3,
    type: "excuse",
    title: "Usprawiedliwienie zaakceptowane",
    message:
      "Twoje usprawiedliwienie nieobecności z dnia 6 września zostało zaakceptowane.",
    date: "08.09.2026",
    time: "16:20",
    read: true,
  },
  {
    id: 4,
    type: "message",
    title: "Wiadomość od opiekuna",
    message:
      "Proszę wszystkich lektorów o przybycie 15 minut przed rozpoczęciem Mszy Świętej.",
    date: "07.09.2026",
    time: "19:05",
    read: true,
  },
];
