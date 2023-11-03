export const formatDateDDStrMonthYYYY = (date: string): string => {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString('default', { month: 'numeric' });
  return `${dateObj.getDate()}/${month}/${dateObj.getFullYear()}`;
};