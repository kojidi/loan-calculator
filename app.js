// to see what methods do:

// document.getElementById("loan-form").addEventListener("submit", runthis);
// function runthis(e) {
//   console.log(parseFloat(123.1547));
//   const x = Math.pow(1 + 4, 2);
//   console.log(x);
//   e.preventDefault();
// }

/////////////////////////////////////////////////////
// listen for submit
document.getElementById("loan-form").addEventListener("submit", function (e) {
  // Hide the Results
  document.getElementById("results").style.display = "none";

  // Show the Loader
  document.getElementById("loading").style.display = "block";
  setTimeout(calculateResult, 2000);

  e.preventDefault();
});

// Calculate Result
function calculateResult() {
  // Show the Results
  document.getElementById("results").style.display = "block";

  // Hide the Loader
  document.getElementById("loading").style.display = "none";
  // UI Vars
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");

  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value);
  const calculateInterest = parseFloat(interest.value) / 100 / 12;
  const calculatePayment = parseFloat(years.value) * 12;

  // Calculate Monthly Payment
  const x = Math.pow(1 + calculateInterest, calculatePayment);
  const monthly = (principal * x * calculateInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatePayment).toFixed(2);
    totalInterest.value = (monthly * calculatePayment - principal).toFixed(2);
  } else {
    showError("Please check your numbers !");
  }
}

// Show Error
function showError(error) {
  // Hide the Results
  document.getElementById("results").style.display = "none";

  // Hide the Loader
  document.getElementById("loading").style.display = "none";
  // Create a Div
  const errorDiv = document.createElement("div");
  // Get Elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");
  // Add Bootstrap class to the div
  errorDiv.className = "alert alert-danger";
  // Create text node and append it to div
  errorDiv.appendChild(document.createTextNode(error));
  // Inser error above heading
  card.insertBefore(errorDiv, heading);
  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector(".alert").remove();
}
