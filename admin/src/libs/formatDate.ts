export const formatDate = (date?: Date, separator?: string) => {
  if (!date) {
    return "";
  }
  if (!separator) {
    separator = " ";
  }
  const day = date.getDate();
  const month = date.toLocaleString("fr", { month: "short" });
  const year = date.getFullYear();

  const formattedDay = day < 10 ? `0${day}` : day.toString();

  return `${formattedDay}${separator}${month}${separator}${year}`;
};
