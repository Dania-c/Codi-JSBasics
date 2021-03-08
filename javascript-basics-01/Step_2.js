var name="Omar";
var surname="Ayoubi";
var city="Tripoli";

var pname = document.createElement("P");               // Create a <p> element
pname.innerText = "Nom :" + name;               // Insert text
document.body.appendChild(pname);  

var psurname = document.createElement("P");               // Create a <p> element
psurname.innerText = "Prénom :" + surname;               // Insert text
document.body.appendChild(psurname);  

var pcity = document.createElement("P");               // Create a <p> element
pcity.innerText = "Ville :" + city;               // Insert text
document.body.appendChild(pcity);  

alert("Nom :" + name +"\nPrénom :" + surname + "\nVille : " + city);