export const diffCalc = (act, prev) => {
  return Math.round(((prev * 100) / act) * -1 + 100);
};
