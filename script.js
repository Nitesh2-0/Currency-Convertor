
//JAVASCRIPT
const convertBtn = document.getElementById("convertBtn");
const amountInput = document.getElementById("amount");
const fromCurrencySelect = document.getElementById("fromCurrency");
const toCurrencySelect = document.getElementById("toCurrency");
const convertedAmountInput = document.getElementById("convertedAmount");

const exchangeRates = {
  USD: 1.0,
  EUR: 0.91,
  INR: 83.24,
  CNY: 7.24,
  AUD: 1.55,
  HKD: 7.82,
  IRR: 42312.50,
};

convertBtn.addEventListener("click", () => {
  const amount = parseFloat(amountInput.value);
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;

  if (isNaN(amount)) {
    alert("Please enter a valid amount.");
    return;
  }

  if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
    alert("Selected currencies are not supported.");
    return;
  }

  const convertedAmount =
    (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];
  convertedAmountInput.value = convertedAmount.toFixed(2);
});

var goodbtn = document.getElementById("good")
var badBtn  = document.getElementById("bad") 

goodbtn.addEventListener("click",function(){
  badBtn.style.color="white";
  badBtn.style.backgroundColor = "green";
  badBtn.innerHTML = "Thank you for your feedback. ! 🥰";
  goodbtn.style.display = "none"
  setTimeout(function(){
    goodbtn.style.display = "initial"
    badBtn.style.color="white";
    badBtn.style.backgroundColor = "red";
    badBtn.innerHTML = "Bad";
  },5000)
})

badBtn.addEventListener("click",function(){
  badBtn.style.color="white";
  goodbtn.style.backgroundColor = "red";
  goodbtn.innerHTML = "Sorry !,I'm improving. ! 😞";
  badBtn.style.display = "none"
  setTimeout(function(){
    badBtn.style.display = "initial"
    goodbtn.style.color="white";
    goodbtn.style.backgroundColor = "green";
    goodbtn.innerHTML = "Good";
  },5000)
})