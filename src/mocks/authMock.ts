export async function mockLogin(emial: string, password: string) {
  await new Promise((res) => setTimeout(res, 800));
  if (emial === "admin@test.pl" && password === "1234") {
    return {
      id: 1,
      name: "Admiin",
      role: "admin",
    };
  }
  throw new Error("Nieprawidłowe dane logowania");
}
