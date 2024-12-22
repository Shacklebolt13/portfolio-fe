// export const showDate = (date: Date) => {
//   return `${date.getMonth()}/${date.getFullYear()}`;
// };

export const showDate = (date: string | Date) => {
  if (typeof date === "string") {
    date = new Date(date);
  }
  const dateObject = new Date(date);
  return `${dateObject.getMonth()}/${dateObject.getFullYear()}`;
};
