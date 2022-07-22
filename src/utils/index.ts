export const changeDateFormat = (date: Date) => {
  return new Date(+new Date(date) + 3240 * 10000).toISOString().replace("T", " ").replace(/\..*/, "")
}
