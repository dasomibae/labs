window.onload = autoSlideshow;

var pic = 0;
var des = 0;

var pictures = new Array("../pics/01.jpg","../pics/02.jpg","../pics/03.jpg","../pics/04.jpg","../pics/05.jpg",
                                "../pics/06.jpg","../pics/07.jpg","../pics/08.jpg","../pics/09.jpg","../pics/10.jpg");

var description = new Array ("<h2>Lago di Braies, Italy</h2><br>The Pragser Wildsee, or Lake Prags, Lake Braies is a lake in the Prags Dolomites in South Tyrol, Italy. It belongs to the municipality of Prags which is located in the Prags Valley. During World War II it was the scene of the transport of concentration camp inmates to Tyrol.",
                                    "<h2>North Central Province, Maldives</h2><br>North Central Province was one of the seven short-lived provinces of the Maldives. The provinces were created in a decentralization attempt by the Nasheed administration in 2008. It was governed by the Minister of State for Home Affairs, Ms. Thilmeeza Hussain.",
                                    "<h2>Tamnougalt, Morocco</h2><br>Tamnougalt is a kasbah and date palm oasis in the Atlas Mountains, and located in the Draa River valley in Morocco, some 75 kilometers south of Ouarzazate. The village is close to Agdz and has a famous kasbah. The Jbel Kissane rises to the north dominating the landscape.",
                                    "<h2>Manarola, Italy</h2><br>Manarola is a small town, a frazione of the comune of Riomaggiore, in the province of La Spezia, Liguria, northern Italy. It is the second-smallest of the famous Cinque Terre towns frequented by tourists.",
                                    "<h2>Vernazza, Italy</h2><br>Vernazza is one of the 5 centuries-old villages that make up the Cinque Terre, on northwest Italy’s rugged Ligurian coast. Colorful houses surround its small marina. The Santa Margherita di Antiochia Church has a bell tower topped by an elegant cupola. Clinging to the rocks, Doria Castle is a medieval defensive structure with a cylindrical tower.",
                                    "<h2>Rio de Janeiro, Brazil</h2><br>Rio de Janeiro is a huge seaside city in Brazil, famed for its Copacabana and Ipanema beaches, 38m Christ the Redeemer statue atop Mount Corcovado and for Sugarloaf Mountain, a granite peak with cable cars to its summit. The city is also known for its sprawling favelas (shanty towns). Its raucous Carnaval festival, featuring parade floats, flamboyant costumes and samba dancers, is considered the world’s largest.",
                                    "<h2>Eiffel Tower, Paris</h2><br>The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.",
                                    "<h2>Moraine Lake, Canada</h2><br>Moraine Lake is a glacially fed lake in Banff National Park, 14 kilometres outside the Village of Lake Louise, Alberta, Canada. It is situated in the Valley of the Ten Peaks, at an elevation of approximately 1,884 metres. The lake has a surface area of 50 hectares.",
                                    "<h2>Las Vegas, United States</h2><br>Las Vegas is an internationally renowned major resort city, known primarily for its gambling, shopping, fine dining, entertainment, and nightlife. The Las Vegas Valley as a whole serves as the leading financial, commercial, and cultural center for Nevada.",
                                    "<h2>Alaska, USA</h2><br>Alaska USA Federal Credit Union is a credit union headquartered in Anchorage, Alaska, chartered and regulated under the authority of the National Credit Union Administration. In the United States, Alaska USA is among the largest credit unions by assets, and it is among the 20 largest credit unions by membership."
);


function autoSlideshow() {
    setTimeout(function () {
        document.getElementById("pictures").src = pictures[pic];
        document.getElementById("descriptions").innerHTML = description[des];
        document.getElementById("pictures").className = "";
        document.getElementById("descriptions").className = "";

    }, 1000);
    document.getElementById("pictures").className = "fadeOut";
    document.getElementById("descriptions").className = "fadeOut";
    document.getElementById("pictures").src = pictures[pic];
    document.getElementById("descriptions").innerHTML = description[des];

    pic++;
    des++;
    if (pic == pictures.length && des == description.length) {
        pic = 0;
        des = 0;
    }
    setTimeout(autoSlideshow, 3000);
    return false;
}

