/*parta.js*/

function feetToMeter(val) {
    var feet = parseFloat(0);
    feet = val/3.2808;
    document.getElementById("meter").value = feet.toFixed(2);
}

function meterToFeet(val) {
    var meter = parseFloat(0);
    meter = val * 3.2808;
    document.getElementById("feet").value = meter.toFixed(2);
}

function gallonToLiter(val) {
    var gallon = parseFloat(0);
    gallon = val * 4.54;
    document.getElementById("liter").value = gallon.toFixed(2);
}

function letterToGallon(val) {
    var liter = parseFloat(0);
    liter = val / 4.54;
    document.getElementById("gallon").value = liter.toFixed(2);
}

function squareFeetToSquareMetres(val) {
    var squareFeet = parseFloat(0);
    squareFeet = val / 10.7639;
    document.getElementById("squareMetres").value = squareFeet.toFixed(2);
}

function squareMetresToSquareFeet(val) {
    var squareMetres = parseFloat(0);
    squareMetres = val * 10.7639;
    document.getElementById("squareFeet").value = squareMetres.toFixed(2);
}

function mileToKilometer(val) {
    var mile = parseFloat(0);
    mile = val / 0.621371;
    document.getElementById("kilometer").value = mile.toFixed(2);
}

function kilometerToMile(val) {
    var kilometer = parseFloat(0);
    kilometer = val * 0.621371;
    document.getElementById("mile").value = kilometer.toFixed(2);
}