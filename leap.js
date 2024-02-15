function leapYear(year) {
  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
    return "a Leap Year";
  } else {
    return "Not a Leap year";
  }
}

document.getElementById("submitBtn").addEventListener("click", function () {
  const yearInput = document.getElementById("year").value;
  const result = leapYear(parseInt(yearInput));
  document.getElementById("resultArea").innerHTML = yearInput + " is " + result;
});
