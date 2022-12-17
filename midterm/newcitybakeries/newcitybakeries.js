function information() {
    document.getElementById("cakeType").disabled = false;
}

function typeOfCake() {
    var cakeType = parseInt(document.getElementById("cakeType").value);

    if (cakeType == 1) {
        document.getElementById("length").readOnly = false;
        document.getElementById("width").readOnly = false;
        document.getElementById("radius").readOnly = true;
        document.getElementById("layer").disabled = false;

    } else if (cakeType == 2) {
        document.getElementById("length").readOnly = true;
        document.getElementById("width").readOnly = true;
        document.getElementById("radius").readOnly = false;
        document.getElementById("layer").disabled = false;
    }
}

function order() {
    var totalCost = parseFloat(0);
    var result_message = "";
    var cake_order = "";
    var additional_price = 0;
    var additional_choice = "";
    var cake_price = parseFloat(0);
    var size_price = parseFloat(0);
    var layer_price = parseFloat(0);

    var cake_type = parseInt(document.getElementById("cakeType").value);
    var cake_length = parseFloat(document.getElementById("length").value);
    var cake_width = parseFloat(document.getElementById("width").value);
    var cake_radius = parseFloat(document.getElementById("radius").value);
    var layer = parseInt(document.getElementById("layer").value);


    if (cake_type == 1) {
        size_price = (((cake_length * cake_width) - 900) * 0.02) + 18;
        if (layer == 1) {
            cake_order = "Sheet cake " + cake_length + "cm x " + cake_width + "cm with 1 layer:";
            layer_price = 0;
        }
        else if (layer == 2) {
            cake_order = "Sheet cake " + cake_length + "cm x " + cake_width + "cm with 2 layers:";
            layer_price = size_price * 0.5;
        }
        else {
            cake_order = "Sheet cake " + cake_length + "cm x " + cake_width + "cm with 3 layers:";
            layer_price = size_price * 1;
        }
        cake_price = size_price + layer_price;
    }
    else if (cake_type == 2) {
        size_price = ((((cake_radius * cake_radius) * 3.14) - 707) * 0.02) + 15;
        if (layer == 1) {
            cake_order = "Round cake " + cake_radius + "cm with 1 layer:";
            layer_price = 0;
        }
        else if (layer == 2) {
            cake_order = "Round cake " + cake_radius + "cm with 2 layers:";
            layer_price = size_price * 0.5;
        }
        else {
            cake_order = "Round cake " + cake_radius + "cm with 3 layers:";
            layer_price = size_price * 1;
        }
        cake_price = size_price + layer_price;

    }


    if(document.querySelector('input[id=cream_cheese]:checked'))
    {
        additional_price += parseInt(document.querySelector('input[id=cream_cheese]:checked').value);
        additional_choice = (additional_choice + "<tr><th>Cream Cheese icing</th><td>$5</td></tr>");
    }
    if(document.querySelector('input[id=fruit_almonds]:checked'))
    {
        additional_price += parseInt(document.querySelector('input[id=fruit_almonds]:checked').value);
        additional_choice = (additional_choice + "<tr><th>Fruit and Almond topping</th><td>$7</td></tr>");
    }
    if(document.querySelector('input[id=fruit_jam]:checked'))
    {
        additional_price += parseInt(document.querySelector('input[id=fruit_jam]:checked').value);
        additional_choice = (additional_choice + "<tr><th>Fruit Jam filling</th><td>$4</td></tr>");
    }

    totalCost = cake_price + additional_price;
    totalCost = totalCost.toFixed(2);

    result_message = (document.getElementById("firstname").value + " " +
                      document.getElementById("lastname").value + "<br>" +
                      document.getElementById("address").value + "<br>" +
                      "<p style='text-transform:uppercase; margin: 0px;'>" + document.getElementById("postalcode").value + "</p>" +
                      document.getElementById("phone").value + "<br>" +
                      document.getElementById("email").value + "<br><br>" +
                      "<div style='color: #b85600'>Your order:</div>" +
                        "<table><tr><th>"+ cake_order +"</th><td>$"+ cake_price.toFixed(2)+"</td></tr>" +
                        additional_choice+
                        "<tr><th>"+"Total"+"</th><td>$"+totalCost+"</td></tr></table>" +
                        "<div><img src='../pics/img_part2.webp'></div>"
                        );

    document.getElementById("printout").innerHTML = result_message;
}