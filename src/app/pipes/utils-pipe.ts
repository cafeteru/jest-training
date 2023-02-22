export const firstLetterUppercase = (value: string): string => {
  return value.replace(/^[a-z]/, (m) => m.toUpperCase());
};
