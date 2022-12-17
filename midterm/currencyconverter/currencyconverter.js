var leftCurrency = parseInt(0);
var rightCurrency = parseInt(0);
var money = parseFloat(0);
var euro = parseFloat(0);
var usd = parseFloat(0);
var cad = parseFloat(0);
var bitcoin  = parseFloat(0);
var ethereum   = parseFloat(0);


function changedCurrency() {
    leftCurrency = parseInt(document.getElementById("currency_on_hand").value);
    rightCurrency = parseInt(document.getElementById("convert_currency").value);
    money = parseFloat(document.getElementById("amount").value);

    if (leftCurrency == 1) {

        if (rightCurrency == 11) {
            document.getElementById("conversion_value").innerHTML = money.toFixed(2) + " Euro (1:1)";

        } else if (rightCurrency == 22) {
            usd = money * 1.21;
            document.getElementById("conversion_value").innerHTML = usd.toFixed(2) + " USD (1.21:1)";

        } else if (rightCurrency == 33) {
            cad = money * 1.52;
            document.getElementById("conversion_value").innerHTML = cad.toFixed(2) + " CDN (1.52:1)";

        } else if (rightCurrency == 44) {
            bitcoin = money * 0.000024;
            document.getElementById("conversion_value").innerHTML = bitcoin.toFixed(2) + " Bitcoin (0.000024:1)";

        } else if (rightCurrency == 55) {
            ethereum = money * 0.00075;
            document.getElementById("conversion_value").innerHTML = ethereum.toFixed(2) + " Ether (0.00075:1)";

        }

    } else if (leftCurrency == 2) {

        if (rightCurrency == 11) {
            euro = money * 0.83;
            document.getElementById("conversion_value").innerHTML = euro.toFixed(2) + " EUR (0.83:1)";

        } else if (rightCurrency == 22) {
            document.getElementById("conversion_value").innerHTML = money.toFixed(2)  + " USD (1:1)";

        } else if (rightCurrency == 33) {
            cad = money * 1.26;
            document.getElementById("conversion_value").innerHTML = cad.toFixed(2) + " CDN (1.26:1)";

        } else if (rightCurrency == 44) {
            bitcoin = money * 0.000020;
            document.getElementById("conversion_value").innerHTML = bitcoin.toFixed(2) + " Bitcoin (0.000020:1)";

        } else if (rightCurrency == 55) {
            ethereum = money * 0.00062;
            document.getElementById("conversion_value").innerHTML = ethereum.toFixed(2) + " Ether (0.00062:1)";

        }

    } else if (leftCurrency == 3) {

        if (rightCurrency == 11) {
            euro = money*0.66;
            document.getElementById("conversion_value").innerHTML = euro.toFixed(2) + " EUR (0.66:1)";

        } else if (rightCurrency == 22) {
            usd = money * 0.79;
            document.getElementById("conversion_value").innerHTML = usd.toFixed(2) + " USD (0.79:1)";

        } else if (rightCurrency == 33) {
            document.getElementById("conversion_value").innerHTML = money.toFixed(2)  + " CDN (1:1)";

        } else if (rightCurrency == 44) {
            bitcoin = money * 0.000016;
            document.getElementById("conversion_value").innerHTML = bitcoin.toFixed(2) + " Bitcoin (0.000016:1)";

        } else if (rightCurrency == 55) {
            ethereum = money * 0.00049;
            document.getElementById("conversion_value").innerHTML = ethereum.toFixed(2) + " Ether (0.00049:1)";

        }
    } else if (leftCurrency == 4) {

        if (rightCurrency == 11) {
            euro = money * 42365.79;
            document.getElementById("conversion_value").innerHTML = euro.toFixed(2) + " EUR (42365.79:1)";

        } else if (rightCurrency == 22) {
            usd = money * 51145.10;
            document.getElementById("conversion_value").innerHTML = usd.toFixed(2) + " USD (51145.10:1)";

        } else if (rightCurrency == 33) {
            cad = money * 64510.59;
            document.getElementById("conversion_value").innerHTML = cad.toFixed(2) + " CDN (64510.59:1)";

        } else if (rightCurrency == 44) {
            document.getElementById("conversion_value").innerHTML = money.toFixed(2) + " Bitcoin (1:1)";

        } else if (rightCurrency == 55) {
            ethereum = money * 31.77;
            document.getElementById("conversion_value").innerHTML = ethereum.toFixed(2) + " Ether (31.77:1)";

        }
    } else if (leftCurrency == 5) {

        if (rightCurrency == 11) {
            euro = money * 1344.49;
            document.getElementById("conversion_value").innerHTML = euro.toFixed(2) + " EUR (1344.49:1)";

        } else if (rightCurrency == 22) {
            usd = money * 1623.13;
            document.getElementById("conversion_value").innerHTML = usd.toFixed(2) + " USD (1623.13:1)";

        } else if (rightCurrency == 33) {
            cad = money * 2047.59;
            document.getElementById("conversion_value").innerHTML = cad.toFixed(2) + " CDN (2047.59:1)";

        } else if (rightCurrency == 44) {
            bitcoin = money * 0.031;
            document.getElementById("conversion_value").innerHTML = bitcoin.toFixed(2) + " Bitcoin (0.031:1)";

        } else if (rightCurrency == 55) {
            document.getElementById("conversion_value").innerHTML = money.toFixed(2) + " Ether (1:1)";

        }
    }

}