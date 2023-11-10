export const formatDateDDStrMonthHourMin = (date: string): string => {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString("default", { month: "numeric" });
  const hour = dateObj.getHours();
  const min = dateObj.getMinutes();
  return `${dateObj.getDate()}/${month} ${hour}:${min} `;
};
