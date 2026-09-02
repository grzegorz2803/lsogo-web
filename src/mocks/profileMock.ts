export type UserProfileData = {
  id: number;
  fullName: string;
  grade: string;
  email: string;
  parish: string;
  diocese: string;
  guardian: string;
};

export const profileMock: UserProfileData = {
  id: 1,
  fullName: "Jan Kowalski",
  grade: "Lektor",
  email: "jan.kowalski@example.pl",
  parish: "Parafia Przemienienia Pańskiego w Makowie Podhalańskim",
  diocese: "Archidiecezja Krakowska",
  guardian: "ks. Jan Nowak",
};
