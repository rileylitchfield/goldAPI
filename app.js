var myHeaders = new Headers();
myHeaders.append('x-access-token', 'goldapi-3qem6ukfivr9ll-io');
myHeaders.append('Content-Type', 'application/json');

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

function ddlSelect() {
  var eMetal = document.getElementById('metal');
  var metalValue = eMetal.options[eMetal.selectedIndex].value;
  var eCurrency = document.getElementById('currency');
  var currencyValue = eCurrency.options[eCurrency.selectedIndex].value;
  var eDate = document.getElementById('date').value;
  var dateValue = eDate.replace(/-/g, '');
  console.log(dateValue);

  fetchPrice(metalValue, currencyValue, dateValue);
}

function fetchPrice(metal, currency, date) {
  fetch(
    `https://www.goldapi.io/api/${metal}/${currency}/${date}`,
    requestOptions
  )
    .then((response) => response.json())
    .then(
      (result) =>
        (document.getElementById(
          'data'
        ).innerHTML = `<h3 class="mt-5 text-center">Price</h3>
      <div class="divide"></div>
      <h4 class="price mt-3">${result.price.toFixed(2)}</h4>`)
    )
    .catch((error) => console.log('error', error));
}
