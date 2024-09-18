//	codeFromInternet() {
// Include api for currency change
const api = "https://api.exchangerate-api.com/v4/latest/USD";

// For selecting different controls
let search = document.querySelector(".searchBox");
let convert = document.querySelector(".convert");
let fromCurrecy = document.querySelector(".from");
let toCurrecy = document.querySelector(".to");
let finalValue = document.querySelector(".finalValue");
let finalAmount = document.getElementById("finalAmount");
let resultFrom;
let resultTo;
let searchValue;

// Event when currency is changed
fromCurrecy.addEventListener('change', (event) => {
    resultFrom = `${event.target.value}`;
});

// Event when currency is changed
toCurrecy.addEventListener('change', (event) => {
    resultTo = `${event.target.value}`;
});

search.addEventListener('input', updateValue);

// Function for updating value
function updateValue(e) {
    searchValue = e.target.value;
}

// When user clicks, it calls function getresults 
convert.addEventListener("click", getResults);

}

// Function getresults
function getResults() {
    fetch(`${api}`)
        .then(currency => {
            return currency.json();
        }).then(displayResults);
}

// Display results after conversion
function displayResults(currency) {
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];
    finalValue.innerHTML =
        ((toRate / fromRate) * searchValue).toFixed(2);
    finalAmount.style.display = "block";
}

// When user click on reset button
function clearVal() {
    window.location.reload();
    document.getElementsByClassName("finalValue").innerHTML = "";
};

async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}
// {"provider":"https://www.exchangerate-api.com","WARNING_UPGRADE_TO_V6":"https://www.exchangerate-api.com/docs/free","terms":"https://www.exchangerate-api.com/terms","base":"USD","date":"2024-09-07","time_last_updated":1725667201,"rates":{"USD":1,"AED":3.67,"AFN":70.27,"ALL":90.13,"AMD":387.67,"ANG":1.79,"AOA":924.72,"ARS":957.17,"AUD":1.49,"AWG":1.79,"AZN":1.7,"BAM":1.76,"BBD":2,"BDT":119.49,"BGN":1.76,"BHD":0.376,"BIF":2881.97,"BMD":1,"BND":1.3,"BOB":6.93,"BRL":5.57,"BSD":1,"BTN":83.98,"BWP":13.35,"BYN":3.25,"BZD":2,"CAD":1.35,"CDF":2836.49,"CHF":0.843,"CLP":942.7,"CNY":7.09,"COP":4180.83,"CRC":518.64,"CUP":24,"CVE":99.42,"CZK":22.56,"DJF":177.72,"DKK":6.73,"DOP":59.79,"DZD":133.06,"EGP":48.44,"ERN":15,"ETB":109.52,"EUR":0.902,"FJD":2.22,"FKP":0.761,"FOK":6.73,"GBP":0.761,"GEL":2.69,"GGP":0.761,"GHS":15.86,"GIP":0.761,"GMD":70.56,"GNF":8658,"GTQ":7.73,"GYD":209.22,"HKD":7.79,"HNL":24.78,"HRK":6.79,"HTG":131.63,"HUF":355.01,"IDR":15419.45,"ILS":3.72,"IMP":0.761,"INR":83.98,"IQD":1309.57,"IRR":42045.28,"ISK":137.89,"JEP":0.761,"JMD":157.4,"JOD":0.709,"JPY":142.61,"KES":128.95,"KGS":85.19,"KHR":4063.98,"KID":1.49,"KMF":443.6,"KRW":1334.75,"KWD":0.305,"KYD":0.833,"KZT":481.05,"LAK":21938.86,"LBP":89500,"LKR":298.87,"LRD":194.82,"LSL":17.79,"LYD":4.77,"MAD":9.74,"MDL":17.43,"MGA":4547.46,"MKD":55.48,"MMK":2101.67,"MNT":3351.52,"MOP":8.03,"MRU":39.78,"MUR":45.88,"MVR":15.45,"MWK":1744.86,"MXN":19.98,"MYR":4.33,"MZN":63.92,"NAD":17.79,"NGN":1595.08,"NIO":36.81,"NOK":10.69,"NPR":134.36,"NZD":1.62,"OMR":0.384,"PAB":1,"PEN":3.79,"PGK":3.92,"PHP":56.07,"PKR":278.78,"PLN":3.86,"PYG":7762.85,"QAR":3.64,"RON":4.48,"RSD":105.49,"RUB":89.46,"RWF":1350.63,"SAR":3.75,"SBD":8.43,"SCR":13.52,"SDG":510.89,"SEK":10.28,"SGD":1.3,"SHP":0.761,"SLE":22.51,"SLL":22512.03,"SOS":571.36,"SRD":29.17,"SSP":3297.78,"STN":22.09,"SYP":12863.07,"SZL":17.79,"THB":33.65,"TJS":10.64,"TMT":3.5,"TND":3.04,"TOP":2.33,"TRY":33.99,"TTD":6.76,"TVD":1.49,"TWD":31.93,"TZS":2711.54,"UAH":41.02,"UGX":3717,"UYU":40.31,"UZS":12695.09,"VES":36.7,"VND":24661.97,"VUV":118.4,"WST":2.71,"XAF":591.47,"XCD":2.7,"XDR":0.741,"XOF":591.47,"XPF":107.6,"YER":250.25,"ZAR":17.79,"ZMW":26.36,"ZWL":13.89}}

// from v6: https://v6.exchangerate-api.com/v6/d5ca6d7af7d630285fe1c6a1/latest/USD
{
 "result":"success",
 "documentation":"https://www.exchangerate-api.com/docs",
 "terms_of_use":"https://www.exchangerate-api.com/terms",
 "time_last_update_unix":1726531201,
 "time_last_update_utc":"Tue, 17 Sep 2024 00:00:01 +0000",
 "time_next_update_unix":1726617601,
 "time_next_update_utc":"Wed, 18 Sep 2024 00:00:01 +0000",
 "base_code":"USD",
 "conversion_rates":{
  "USD":1,
  "AED":3.6725,
  "AFN":69.4762,
  "ALL":89.5953,
  "AMD":387.2631,
  "ANG":1.7900,
  "AOA":939.7286,
  "ARS":962.0800,
  "AUD":1.4826,
  "AWG":1.7900,
  "AZN":1.7004,
  "BAM":1.7589,
  "BBD":2.0000,
  "BDT":119.5104,
  "BGN":1.7588,
  "BHD":0.3760,
  "BIF":2903.0652,
  "BMD":1.0000,
  "BND":1.2957,
  "BOB":6.9214,
  "BRL":5.5453,
  "BSD":1.0000,
  "BTN":83.8880,
  "BWP":13.2754,
  "BYN":3.2656,
  "BZD":2.0000,
  "CAD":1.3582,
  "CDF":2847.3207,
  "CHF":0.8450,
  "CLP":926.0895,
  "CNY":7.0943,
  "COP":4179.9242,
  "CRC":518.5490,
  "CUP":24.0000,
  "CVE":99.1652,
  "CZK":22.5979,
  "DJF":177.7210,
  "DKK":6.7162,
  "DOP":59.9664,
  "DZD":132.2916,
  "EGP":48.4201,
  "ERN":15.0000,
  "ETB":114.0476,
  "EUR":0.8993,
  "FJD":2.2173,
  "FKP":0.7574,
  "FOK":6.7163,
  "GBP":0.7574,
  "GEL":2.6942,
  "GGP":0.7574,
  "GHS":15.9494,
  "GIP":0.7574,
  "GMD":70.6341,
  "GNF":8672.0691,
  "GTQ":7.7344,
  "GYD":209.2322,
  "HKD":7.7940,
  "HNL":24.7895,
  "HRK":6.7760,
  "HTG":131.7917,
  "HUF":354.3612,
  "IDR":15399.9680,
  "ILS":3.7404,
  "IMP":0.7574,
  "INR":83.8880,
  "IQD":1308.4617,
  "IRR":42045.6895,
  "ISK":136.9553,
  "JEP":0.7574,
  "JMD":157.5271,
  "JOD":0.7090,
  "JPY":140.5925,
  "KES":129.1407,
  "KGS":84.4901,
  "KHR":4064.7101,
  "KID":1.4826,
  "KMF":442.4440,
  "KRW":1319.9619,
  "KWD":0.3049,
  "KYD":0.8333,
  "KZT":480.2325,
  "LAK":21944.5038,
  "LBP":89500.0000,
  "LKR":301.5520,
  "LRD":199.8219,
  "LSL":17.6340,
  "LYD":4.7727,
  "MAD":9.7578,
  "MDL":17.4630,
  "MGA":4547.6259,
  "MKD":55.5510,
  "MMK":2100.8051,
  "MNT":3386.5499,
  "MOP":8.0278,
  "MRU":39.7703,
  "MUR":45.8573,
  "MVR":15.4206,
  "MWK":1742.6511,
  "MXN":19.2416,
  "MYR":4.3012,
  "MZN":63.9165,
  "NAD":17.6340,
  "NGN":1642.4030,
  "NIO":36.7962,
  "NOK":10.5955,
  "NPR":134.2208,
  "NZD":1.6150,
  "OMR":0.3845,
  "PAB":1.0000,
  "PEN":3.7805,
  "PGK":3.9360,
  "PHP":55.7880,
  "PKR":278.5429,
  "PLN":3.8452,
  "PYG":7793.0224,
  "QAR":3.6400,
  "RON":4.4696,
  "RSD":105.3091,
  "RUB":90.5641,
  "RWF":1353.5077,
  "SAR":3.7500,
  "SBD":8.3075,
  "SCR":13.4412,
  "SDG":454.0603,
  "SEK":10.1839,
  "SGD":1.2958,
  "SHP":0.7574,
  "SLE":22.5999,
  "SLL":22599.8778,
  "SOS":571.9336,
  "SRD":29.5610,
  "SSP":3243.8157,
  "STN":22.0337,
  "SYP":13139.5457,
  "SZL":17.6340,
  "THB":33.2299,
  "TJS":10.6288,
  "TMT":3.5000,
  "TND":3.0348,
  "TOP":2.3238,
  "TRY":34.0055,
  "TTD":6.7653,
  "TVD":1.4826,
  "TWD":31.8545,
  "TZS":2707.9226,
  "UAH":41.4089,
  "UGX":3715.8807,
  "UYU":41.0445,
  "UZS":12723.3564,
  "VES":36.7751,
  "VND":24545.2948,
  "VUV":117.8666,
  "WST":2.7136,
  "XAF":589.9254,
  "XCD":2.7000,
  "XDR":0.7394,
  "XOF":589.9254,
  "XPF":107.3195,
  "YER":250.2697,
  "ZAR":17.6340,
  "ZMW":26.4618,
  "ZWL":13.9563
 }
}

