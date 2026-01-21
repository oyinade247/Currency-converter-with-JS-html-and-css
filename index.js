const currencyFirstEl = document.getElementById("currency-first");
const worthFirst = document.getElementById("worth-first");
const currencySecondEl = document.getElementById("currency-second");
const worthSecond = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");

function updateRate() {
  fetch(`https://open.er-api.com/v6/latest/${currencyFirstEl.value}`)
    .then(res => res.json())
    .then(data => {
const rate = data.rates[currencySecondEl.value];

      exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;

      worthSecond.value = (Number(worthFirst.value) * rate).toFixed(2);
    })
    .catch(error => console.error(error));
}

currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);

worthFirst.addEventListener("input", updateRate);


updateRate();
