function checkOrder(){
    var firstname = document.getElementById("firstName").value;
    var lastname = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var pickup_delivery = document.querySelector('input[name=pickup_delivery]:checked').value;
    var ordermessage = "";
    var resultmessage = "";



    if(document.querySelector('input[id=vegetable]:checked'))
    {
        ordermessage = document.getElementById("vegetable_price").value + " Vegetable Hampers <br>";
    }
    if(document.querySelector('input[id=fruit]:checked'))
    {
        ordermessage += document.getElementById("fruit_price").value + " Fruit Hamper <br>";
    }
    if(document.querySelector('input[id=chicken]:checked'))
    {
        ordermessage += document.getElementById("chicken_price").value + " Fresh Chickens <br>";
    }
    if(document.querySelector('input[id=pork]:checked'))
    {
        ordermessage += document.getElementById("pork_price").value + " Kg Pork <br>";
    }



    resultmessage = firstname + " " + lastname + "<br>" +
                    address + "<br>" +
                    pickup_delivery + "<br><br>" +
                    "Order: <br>" +
                    ordermessage;

    document.getElementById("result").innerHTML = resultmessage;

}