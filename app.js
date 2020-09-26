var myHeaders = new Headers();
myHeaders.append('x-access-token', 'goldapi-3qem6ukfivr9ll-io');
myHeaders.append('Content-Type', 'application/json');

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

// Metal
var gold = document.getElementById('gold').value;
var silver = document.getElementById('silver').value;
var platinum = document.getElementById('platinum').value;
var palladium = document.getElementById('palladium').value;

function ddlSelect() {
  var e = document.getElementById('metal');
  var metalValue = e.options[e.selectedIndex].value;
  console.log(metalValue);
}

// Currency
var usd = document.getElementById('usd').value;

function fetchPrice(metal, currency) {
  fetch(
    `https://www.goldapi.io/api/${metal}/${currency}/20200924`,
    requestOptions
  )
    .then((response) => response.json())
    .then(
      (result) => (document.getElementById('data').innerText = result.price)
    )
    .catch((error) => console.log('error', error));
}

fetchPrice(gold, usd);
