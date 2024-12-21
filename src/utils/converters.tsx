// export const showDate = (date: Date) => {
//   return `${date.getMonth()}/${date.getFullYear()}`;
// };

export const showDate = (date: string) => {
  const dateObject = new Date(date);
  return `${dateObject.getMonth()}/${dateObject.getFullYear()}`;
};
