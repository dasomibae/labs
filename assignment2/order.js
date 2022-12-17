function order_square() {
    var length = parseFloat(document.getElementById("length").value);
    var width = parseFloat(document.getElementById("width").value);
    var height = parseFloat(document.getElementById("height").value);
    var volume = parseFloat(0);
    var totalCost = parseFloat(0);
    var result_message = "";

    volume = length * width * height;
    volume = Math.floor(volume);
    totalCost = volume * 0.001;
    totalCost = totalCost.toFixed(2);


    result_message = (
        "<p style='text-transform:uppercase; margin-top: 60px;' class='order_info'>" + document.getElementById("firstname").value + " " +
        document.getElementById("lastname").value + "<br>" +
        document.getElementById("address").value + "<br>" +
        document.getElementById("postalcode").value + "</p><br>" +
        "<table class='order_detail'><tr><th>Type of Planter:</th><td>Square/Rectangular Cubes</td></tr>" +
        "<tr><th>Dimensions and Volume:</th><td>length(" + length +") width("+ width +") height("+ height +")</td></tr>" +
        "<tr><th></th><td>" + volume + " cm3</td></tr>" +
        "<tr><th>Total Cost:</th><td>$" + totalCost + "</td></tr></table>");

    document.getElementById("printout").innerHTML = result_message;
}

function order_flat() {
    var radius = parseFloat(document.getElementById("radius").value);
    var height = parseFloat(document.getElementById("height").value);
    var volume = parseFloat(0);
    var totalCost = parseFloat(0);
    var result_message = "";

    volume = 3.14 * radius * radius * height;
    volume = Math.floor(volume);
    totalCost = volume * 0.0012;
    totalCost = totalCost.toFixed(2);

    result_message = (
        "<p style='text-transform:uppercase; margin-top: 60px;' class='order_info'>" + document.getElementById("firstname").value + " " +
        document.getElementById("lastname").value + "<br>" +
        document.getElementById("address").value + "<br>" +
        document.getElementById("postalcode").value + "</p><br>" +
        "<table class='order_detail'><tr><th>Type of Planter:</th><td>Flat bottomed cylinders</td></tr>" +
        "<tr><th>Dimensions and Volume:</th><td>radius(" + radius +") height("+ height + ")</td></tr>" +
        "<tr><th></th><td>" + volume + " cm3</td></tr>" +
        "<tr><th>Total Cost:</th><td>$" + totalCost + "</td></tr></table>");

    document.getElementById("printout").innerHTML = result_message;
}


function order_spherical() {
    var radius = parseFloat(document.getElementById("radius").value);
    var volume = parseFloat(0);
    var totalCost = parseFloat(0);
    var result_message = "";

    volume = 1/2 * (4/3 * 3.14 * radius * radius * radius);
    volume = Math.floor(volume);
    totalCost = volume * 0.0015;
    totalCost = totalCost.toFixed(2);

    result_message = (
        "<p style='text-transform:uppercase; margin-top: 60px;' class='order_info'>" + document.getElementById("firstname").value + " " +
        document.getElementById("lastname").value + "<br>" +
        document.getElementById("address").value + "<br>" +
        document.getElementById("postalcode").value + "</p><br>" +
        "<table class='order_detail'><tr><th>Type of Planter:</th><td>Flat bottomed cylinders</td></tr>" +
        "<tr><th>Dimensions and Volume:</th><td>radius(" + radius + ")</td></tr>" +
        "<tr><th></th><td>" + volume + " cm3</td></tr>" +
        "<tr><th>Total Cost:</th><td>$" + totalCost + "</td></tr></table>");

    document.getElementById("printout").innerHTML = result_message;
}


function order_cone() {
    var radius1 = parseFloat(document.getElementById("radius1").value);
    var radius2 = parseFloat(document.getElementById("radius2").value);
    var height = parseFloat(document.getElementById("height").value);
    var volume = parseFloat(0);
    var totalCost = parseFloat(0);
    var result_message = "";

    volume = 1/3 * 3.14 * ((radius1*radius1) + (radius1*radius2) + (radius2*radius2)) * height;
    volume = Math.floor(volume);
    totalCost = volume * 0.002;
    totalCost = totalCost.toFixed(2);

    result_message = (
        "<p style='text-transform:uppercase; margin-top: 60px;' class='order_info'>" + document.getElementById("firstname").value + " " +
        document.getElementById("lastname").value + "<br>" +
        document.getElementById("address").value + "<br>" +
        document.getElementById("postalcode").value + "</p><br>" +
        "<table class='order_detail'><tr><th>Type of Planter:</th><td>Flat bottomed cylinders</td></tr>" +
        "<tr><th>Dimensions and Volume:</th><td>radius1(" + radius1 + ") radius2(" + radius2 + ") height("+ height + ")</td></tr>" +
        "<tr><th></th><td>" + volume + " cm3</td></tr>" +
        "<tr><th>Total Cost:</th><td>$" + totalCost + "</td></tr></table>");

    document.getElementById("printout").innerHTML = result_message;
}