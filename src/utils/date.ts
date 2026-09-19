export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("pl-PL").format(new Date(`${date}T00:00:00`));
}
