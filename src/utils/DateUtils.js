export function renderDateFormat(date, showAccordingToMonthNumber) {
  if (!date) {
    return "";
  }
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var dateObj = new Date(date);
  var month = showAccordingToMonthNumber
    ? dateObj.getMonth() + 1
    : monthNames[dateObj.getMonth()];
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
  var newDate = "";
  if (showAccordingToMonthNumber) {
    newDate = " " + day + "." + month + ".";
  } else {
    newDate = " " + day + " " + month + " ";
  }

  return newDate;
}
