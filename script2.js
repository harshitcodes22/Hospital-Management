/////////////BOOkINGS PAGE////////////////
const bookings_form = document.querySelector(".bookings__form");
const bookingSubmit = document.querySelector(".Btn_Submit");
const patientName = document.querySelector(".patient-name");
const patientEmail = document.querySelector(".patient-email");
const patientMobile = document.querySelector(".patient-mobile");
const bookingDate = document.querySelector(".bookings_date");
const warning = document.querySelector(".warning");
const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const day = new Date().getDate();

////
bookingSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  /// Date Validation checking
  const bookingYear = Number(bookingDate.value.split("-")[0]);
  const bookingMonth = Number(bookingDate.value.split("-")[1]);
  const bookingDay = Number(bookingDate.value.split("-")[2]);

  if (bookingYear < year) {
    warning.textContent = "Enter Correct Year";
  } else if (bookingYear === year && bookingMonth < month) {
    warning.textContent = "Enter Correct Month";
  } else if (
    bookingYear === year &&
    bookingMonth === month &&
    bookingDay < day
  ) {
    warning.textContent = "Enter Correct Day";
  }

  //checking if year doesnot exceeds 2023
  if (bookingYear > year) {
    warning.textContent = `Enter Year within ${year} `;
  }

  ///Mobile Number & patient name Checking
  const mobileLength = patientMobile.value.length;
  if (mobileLength < 10) {
    warning.textContent = "Please Enter Correct Mobile Number";
  }

  /// Email checking
  if (patientEmail.value.substr(-10) !== "@gmail.com") {
    warning.textContent = "Please Enter Email address of format '@gmail.com' ";
  }
  if (patientName.value === "") {
    warning.textContent = "Please Enter Patients Name";
  }
});
