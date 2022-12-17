//
// var customerlist = [];
// var indexvalue = 0;
//
// function addToArray() {
//     var clientobject = {name, address, postalcode, phone, email, clientinfo: [], clientassets: []};
//
//     clientobject.name = document.getElementById("name").value;
//     clientobject.address = document.getElementById("address").value;
//     clientobject.postalcode = document.getElementById("postalcode").value;
//     clientobject.phone = document.getElementById("phone").value;
//     clientobject.email = document.getElementById("email").value;
//
//     var phoneType = document.querySelector("input[name=phoneType]:checked").value;
//     var client = document.querySelector("input[name=client]:checked").value;
//     var gender = document.querySelector("input[name=gender]:checked").value;
//     var age = document.getElementById("age").value;
//     var residence = document.querySelector("input[name=residence]:checked").value;
//     var income = document.getElementById("income").value;
//
//     clientobject.clientinfo.push(phoneType);
//     clientobject.clientinfo.push(client);
//     clientobject.clientinfo.push(gender);
//     clientobject.clientinfo.push(age);
//     clientobject.clientinfo.push(residence);
//     clientobject.clientinfo.push(income);
//
//     if (document.querySelector("input[name=vehicle]:checked")) {
//         clientobject.clientassets.push("Vehicle");
//     }
//     if (document.querySelector("input[name=rrsp]:checked")) {
//         clientobject.clientassets.push("RRSP");
//     }
//     if (document.querySelector("input[name=tfsa]:checked")) {
//         clientobject.clientassets.push("TFSA");
//     }
//     if (document.querySelector("input[name=rrif]:checked")) {
//         clientobject.clientassets.push("RRIF");
//     }
//
//     customerlist.push(clientobject);
//     displayList();
// }
//
// function displayList() {
//
//     var clientlist = "";
//     var displayRadiobuttons = "";
//
//     for (var i = 0; i < customerlist.length; i++) {
//         var clientobject = {name, address, postalcode, phone, email, clientinfo: [], clientassets: []};
//         clientobject = customerlist[i];
//         clientlist = clientobject.name + "<br>" +
//                      clientobject.address + "<br>"+
//                      clientobject.postalcode + "<br>" +
//                      clientobject.phone + "<br>" +
//                      clientobject.email;
//
//         for (var x = 0; x < clientobject.clientinfo.length; x++) {
//             clientlist += clientobject.clientinfo[x] + " ";
//         }
//         for (var x = 0; x < clientobject.clientassets.length; x++) {
//             clientlist += clientobject.clientassets[x] + " ";
//         }
//
//         displayRadiobuttons += "<input type=radio name=listitem ";
//         displayRadiobuttons += " value=" + i + " ";
//         displayRadiobuttons += " onchange=editClient(this.value)>";
//         displayRadiobuttons += clientlist + "<br>";
//     }
//     document.getElementById("showlist").innerHTML = displayRadiobuttons;
// }
//
//
// function editClient(i) {
//     indexvalue = i;
//     var dataitem;
//     var clientobject = {name, address, postalcode, phone, email, clientinfo: [], clientassets: []};
//     clientobject = customerlist[i];
//
//     document.getElementById("submit").disabled = true;
//     document.getElementById("edit").disabled = false;
//
//     document.getElementById("name").value = clientobject.name;
//     document.getElementById("address").value = clientobject.address;
//     document.getElementById("postalcode").value = clientobject.postalcode;
//     document.getElementById("phone").value = clientobject.phone;
//     document.getElementById("email").value = clientobject.email;
//
//     dataitem = clientobject.clientinfo[0];
//     if (dataitem == "business") {
//         document.register.phoneType[0].checked = true;
//     } else {
//         document.register.phoneType[1].checked = true;
//     }
//
//     dataitem = clientobject.clientinfo[1];
//     if (dataitem == "yes") {
//         document.register.client[0].checked = true;
//     } else {
//         document.register.client[1].checked = true;
//     }
//
//     dataitem = clientobject.clientinfo[2];
//     if (dataitem == "male") {
//         document.register.gender[0].checked = true;
//     } else {
//         document.register.gender[1].checked = true;
//     }
//
//     dataitem = clientobject.clientinfo[4];
//     if (dataitem == "own") {
//         document.register.residence[0].checked = true;
//     } else {
//         document.register.residence[1].checked = true;
//     }
//
//     document.register.vehicle.checked = false;
//     document.register.rrsp.checked = false;
//     document.register.tfsa.checked = false;
//     document.register.rrif.checked = false;
//
//     if (clientobject.clientassets.length > 0) {
//         for (var i = 0; i < clientobject.clientassets.length; i++) {
//             dataitem = clientobject.clientassets[i];
//             if (dataitem == "Vehicle") {
//                 document.register.vehicle.checked = true;
//             }
//
//             if (dataitem == "RRSP") {
//                 document.register.rrsp.checked = true;
//             }
//
//             if (dataitem == "TFSA") {
//                 document.register.tfsa.checked = true;
//             }
//
//             if (dataitem == "RRIF") {
//                 document.register.rrif.checked = true;
//             }
//         }
//     }
// }
//
// function setClientObject() {
//
//     var clientobject = {name, address, postalcode, phone, email, clientinfo: [], clientassets: []};
//
//     clientobject.name = document.getElementById("name").value;
//     clientobject.address = document.getElementById("address").value;
//     clientobject.postalcode = document.getElementById("postalcode").value;
//     clientobject.phone = document.getElementById("phone").value;
//     clientobject.email = document.getElementById("email").value;
//
//     var phoneType = document.querySelector("input[name=phoneType]:checked").value;
//     var client = document.querySelector("input[name=client]:checked").value;
//     var gender = document.querySelector("input[name=gender]:checked").value;
//     var age = document.getElementById("age").value;
//     var residence = document.querySelector("input[name=residence]:checked").value;
//     var income = document.getElementById("income").value;
//
//     clientobject.clientinfo.push(phoneType);
//     clientobject.clientinfo.push(client);
//     clientobject.clientinfo.push(gender);
//     clientobject.clientinfo.push(age);
//     clientobject.clientinfo.push(residence);
//     clientobject.clientinfo.push(income);
//
//     if (document.querySelector("input[name=vehicle]:checked")) {
//         clientobject.clientassets.push("Vehicle");
//     }
//     if (document.querySelector("input[name=rrsp]:checked")) {
//         clientobject.clientassets.push("RRSP");
//     }
//     if (document.querySelector("input[name=tfsa]:checked")) {
//         clientobject.clientassets.push("TFSA");
//     }
//     if (document.querySelector("input[name=rrif]:checked")) {
//         clientobject.clientassets.push("RRIF");
//     }
//
//     customerlist[indexvalue] = clientobject;
//
//     document.getElementById("submit").disabled = false;
//     document.getElementById("edit").disabled = true;
//     displayList();
// }


window.onload = initfunction;
var helpfulhints=[  "Enter your name",
                    "Enter your address",
                    "Enter your postal code<br>A2A 2A2",
                    "Choose your phone type",
                    "Enter your phone number<br>403 123 1234",
                    "Enter your e-mail",
                    // "Choose Yes if you are currently a client or choose No",
                    "Enter your age",
                    // "Choose Own if you have your own house or choose Rent",
                    "Enter your income",
                    // "Choose what vehicle you have",
                    "Choose your own  ", "~~~"];

var displayhints;

function initfunction() {
    displayhints = document.getElementById("helphints");
    createListeners(document.getElementById("name"),0);
    createListeners(document.getElementById("address"),1);
    createListeners(document.getElementById("postalcode"),2);
    // createListeners(document.getElementById("phonetype"), 3);
    createListeners(document.getElementsByName("phoneType"), 3);
    createListeners(document.getElementById("phone"),4);
    createListeners(document.getElementById("email"),5);
    createListeners(document.getElementById("age"),6);
    createListeners(document.getElementById("income"),7);
    hiddenMouse(document.getElementById("hidden"),8);
}


function createListeners (inputobject,number) {
    inputobject.addEventListener("focus",function () {displayhints.innerHTML=helpfulhints[number];},false);
    inputobject.addEventListener("blur",function () {displayhints.innerHTML=helpfulhints[10];},false);
}
function hiddenMouse (inputobject, number) {
    inputobject.addEventListener("mouseover",function () {displayhints.innerHTML=helpfulhints[number];},false);
    inputobject.addEventListener("mouseout",function () {displayhints.innerHTML=helpfulhints[10];},false);
}



function mouseOver() {
    displayhints.innerHTML = false;
}