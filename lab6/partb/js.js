var customerlist = [];
var i = 0;

function addToArray() {
    var customer={name,address,postalcode,phone,email};
    customer.name = document.getElementById("name").value;
    customer.address = document.getElementById("address").value;
    customer.postalcode = document.getElementById("postalcode").value;
    customer.phone = document.getElementById("phone").value;
    customer.email = document.getElementById("email").value;

    customerlist.push(customer);
    displayList();
}

function displayList() {
    var customers = "";
    var displayRadiobuttons = "";
    for (var i = 0; i < customerlist.length; i++) {

        var customerobject = {name,address,postalcode,phone,email};
        customerobject = customerlist[i];

        customers = customerobject.name + "<br>" + customerobject.address + "<br>" + customerobject.postalcode + "<br>" +
                    customerobject.phone + "<br>" + customerobject.email + "<br>";

        displayRadiobuttons += "<input type=radio  name=listitem ";
        displayRadiobuttons += " value=" + i + " ";
        displayRadiobuttons += " onchange=deleteItem(this.value)>";
        displayRadiobuttons += customers + "<br>";
    }
    document.getElementById("showlist").innerHTML = displayRadiobuttons;
}

function deleteItem(i) {
    customerlist.splice(i,1);
    displayList();
}

