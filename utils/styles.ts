export function className(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ")
}
