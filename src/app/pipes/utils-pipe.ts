export const firstLetterUppercase = (value: string | undefined): string => {
  if (value) {
    return value.replace(/^[a-z]/, (m) => m.toUpperCase());
  }
  return '';
};
