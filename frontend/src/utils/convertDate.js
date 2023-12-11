const convertDate = (dateString) => {
  const dateObject = new Date(dateString);

  const utcYear = dateObject.getUTCFullYear();
  const utcMonth = dateObject.getUTCMonth() + 1; // Months are zero-based, so add 1
  const utcDay = String(dateObject.getUTCDate());

  const formattedDay = utcDay.padStart(2, "0");
  const newDate = `${utcYear}-${utcMonth}-${formattedDay}`;

  return newDate;
};

export default convertDate;
