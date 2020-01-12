const apiUrl = 'https://api.exchangeratesapi.io/latest';

let dropdown = document.getElementById('currency');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = "Pasirink valiutą";

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const request = new XMLHttpRequest();
request.open('GET', apiUrl, true);

request.onload = function() {
    if (request.status === 200) {
        const data = JSON.parse(request.responseText);
        // console.log(data.rates);
        let option;
        for (let i in data.rates) {
            console.log(data.rates[i]);
                option = document.createElement('option');
                option.text = i;
                option.value = data.rates[i];
                dropdown.add(option);
        }
    } else {
        // Reached the server, but it returned an error
    }
}

request.onerror = function() {
    console.error('An error occurred fetching the JSON from ' + apiUrl);
};

const clickSubmit = document.getElementById('submit');
clickSubmit.addEventListener('click', konvertuoti, false);

function konvertuoti(){
    let currencies = document.getElementById("currency");
    let pickedCurrency = currencies.options[currencies.selectedIndex].text;
    console.log(pickedCurrency);
    let currencyRate = document.getElementById("currency").value;
    let convertSum = document.getElementById("sumaEurais").value;
    console.log(currencyRate);
    console.log(convertSum);


    let konvertuotaSuma = currencyRate * convertSum;
    document.getElementById("kursas").innerHTML = currencyRate;
    document.getElementById("konvertuotaSuma").innerHTML = convertSum + " eurų/-ai yra lygu " +
        konvertuotaSuma.toFixed(2) + " " + pickedCurrency;
}


request.send();










