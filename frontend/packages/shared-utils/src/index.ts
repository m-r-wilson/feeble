export function greet(name: string): string {
  return `Hello from Feeble, ${name}!`;
}

export function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}
