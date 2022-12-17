//order detail
function total() {
    var first_name = document.getElementById("firstName").value;
    var last_name = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;

    var margherita_qty = document.getElementById("margherita_qty").value;
    var quattro_formaggi_qty = document.getElementById("quattro_formaggi_qty").value;
    var capricciosa_qty = document.getElementById("capricciosa_qty").value;
    var margherita_price = 12.00;
    var quattro_formaggi_price = 12.50;
    var capricciosa_price = 13.00;

    var schnitzel_qty = document.getElementById("schnitzel_qty").value;
    var mixed_grill_qty = document.getElementById("mixed_grill_qty").value;
    var big_beef_qty = document.getElementById("big_beef_qty").value;
    var schnitzel_price = 8.50;
    var mixed_grill_price = 9.50;
    var big_beef_price = 10.00;

    var coffee_qty = document.getElementById("coffee").value;
    var latte_qty = document.getElementById("latte").value;
    var soft_drink_qty = document.getElementById("soft_drink").value;
    var coffee_price = 2.00;
    var latte_price = 2.50;
    var soft_drink_price = 1.75;

    var pizza_total = parseFloat(0);
    var sandwich_total = parseFloat(0);
    var bevarages_total = parseFloat(0);

    var total = parseFloat(0);
    var message = "";


    margherita_qty = parseFloat(margherita_qty);
    quattro_formaggi_qty = parseFloat(quattro_formaggi_qty);
    capricciosa_qty = parseFloat(capricciosa_qty);
    schnitzel_qty = parseFloat(schnitzel_qty);
    mixed_grill_qty = parseFloat(mixed_grill_qty);
    big_beef_qty = parseFloat(big_beef_qty);
    coffee_qty = parseFloat(coffee_qty);
    latte_qty = parseFloat(latte_qty);
    soft_drink_qty = parseFloat(soft_drink_qty);

    pizza_total = margherita_qty * margherita_price +
                  quattro_formaggi_qty * quattro_formaggi_price +
                  capricciosa_qty * capricciosa_price;
    sandwich_total = schnitzel_qty * schnitzel_price +
                     mixed_grill_qty * mixed_grill_price +
                     big_beef_qty * big_beef_price;
    bevarages_total = coffee_qty * coffee_price +
                      latte_qty * latte_price +
                      soft_drink_qty * soft_drink_price;

    total = pizza_total + sandwich_total + bevarages_total;
    total = total.toFixed(2);

    message = first_name + " " + last_name + "<br>" +
              phone + "<br>" +
        margherita_qty + "Margherita" + margherita_price + "<br>" +
        mixed_grill_qty + "Mixed Grill" + "<br>" +
        "Total Cost: " + total;

    document.getElementById("result").innerHTML = message;

}


// display date and time
function ShowDateTime() {
    const waitMilliseconds = 1000;
    const updateFieldWithId = "time-update";
    if (document.readyState == "complete") {
        let timeNow = new Date();
        let htmlFragment = "<span class='timestamp'>" + timeNow + "</span>";

        let elementFound = document.getElementById(updateFieldWithId);
        if (elementFound) {
            elementFound.innerHTML = htmlFragment;
            setTimeout(ShowDateTime, waitMilliseconds);
        }
        else {
            console.log("Could not find element '" + updateFieldWithId + "' to update timestamp");
            console.log(htmlFragment);
        }
    }
}