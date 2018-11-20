export const truncate = (str, num) =>
  str.length > num ? str.slice(0, num).concat('...') : str;
