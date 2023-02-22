export const firstLetterUppercase = (value: string): string => {
  if (value) {
    return value.replace(/^[a-z]/, (m) => m.toUpperCase());
  }
  return '';
};
