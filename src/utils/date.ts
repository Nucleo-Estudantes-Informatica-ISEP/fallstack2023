export const formatDateDDStrMonthHourMin = (date: string | Date): string => {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString("default", { month: "numeric" });
  const day = dateObj.getDate();
  const hour = dateObj.getHours();
  const min = dateObj.getMinutes();

  const formattedDay = day < 10 ? "0" + day : day;
  const formattedHour = hour < 10 ? "0" + hour : hour;
  const formattedMin = min < 10 ? "0" + min : min;

  return `${formattedDay}/${month} ${formattedHour}:${formattedMin}`;
};
