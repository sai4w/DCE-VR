export const formatDate = (date?: Date) => {
  if (!date) {
    return "";
  }
  const theDate = new Date(date);
  const day = theDate.getDate();
  const month = theDate.toLocaleString("fr", { month: "short" });
  const year = theDate.getFullYear();

  const formattedDay = day < 10 ? `0${day}` : day.toString();

  return `${formattedDay} ${month} ${year}`;
};
