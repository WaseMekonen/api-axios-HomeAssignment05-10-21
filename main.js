const apiKey = "c430e78fb02265f8d2ee8d98178593d2";
const url = `http://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}`;
const userInput = document.getElementById("user-input");
const button = document.getElementById("exchange-button");
const container = document.getElementById("amount-container");

// ajax_12:

const ajaxRequest = new XMLHttpRequest();
ajaxRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const newObj = JSON.parse(this.responseText);
    const button = document.getElementById("exchange-button");
    const userInput = document.getElementById("user-input");
    button.addEventListener("click", function () {
      document.getElementById("amount-container").innerHTML =
        userInput.value / newObj.rates.ILS;
    });
  }
};
const apiKey = "c430e78fb02265f8d2ee8d98178593d2";
const url = `http://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}`;
ajaxRequest.open("GET", url);
ajaxRequest.send();

// ajax_13:

axios
  .get(url)
  .then(function (response) {
    console.log("got success");
    // handle success
    console.log(response);
    if (response.status == 200) {
      button.addEventListener("click", function () {
        let result = userInput.value / response.data.rates.ILS;
        container.innerHTML = result.toFixed(2);
      });
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

//   ajax_14:

let userSelect = document.getElementById("user-input2");
const button2 = document.getElementById("exchange-button2");
const container2 = document.getElementById("amount-container2");

const ajaxRequest = new XMLHttpRequest();
ajaxRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const newObj = JSON.parse(this.responseText);
    const ratesArr = newObj.rates;
    for (let key in ratesArr) {
      userSelect.innerHTML += `<option value="">${key}</option>`;
      button2.addEventListener("click", function () {
        if(userSelect[userSelect.selectedIndex].innerText === key){
          console.log((userInput.value / (newObj.rates.ILS / ratesArr[key])).toFixed(2));
        }
      });
    }
  }
};
ajaxRequest.open("GET", url);
ajaxRequest.send();
