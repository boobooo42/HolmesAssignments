var basePart = { id: 12345, name: "Unknown", color: "black", quantity: 234 };
var parts = [];
var persons = [];

window.onload = loadScript;

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = 0;
    this.getDetails = function () {
        return this.firstName + " " + this.lastName + " - " + this.age;
    }
}

function changeParts() {
    parts[0].name = "Widget";
    parts[0].color = "Green";
    parts[1].name = "Gizmo";
    parts[1].color = "Red";
    parts[2].name = "Doodad";
    parts[2].color = "Blue";
    parts[3].name = "Gadget";
    parts[3].color = "White";
}

function changeBasePart() {
    basePart.quantity = 534;
}

function fillTableWithData() {
    var tableParts = document.getElementById("tblParts");
    var table = tableParts.lastElementChild;
    for (var i = 0; i < parts.length; i++) {
        var row = document.createElement("tr");
        var id = document.createElement("td");
        var name = document.createElement("td");
        var color = document.createElement("td");
        var quantity = document.createElement("td");
        id.innerText = parts[i].id;
        name.innerText = parts[i].name;
        color.innerText = parts[i].color;
        quantity.innerText = parts[i].quantity;
        row.appendChild(id);
        row.appendChild(name);
        row.appendChild(color);
        row.appendChild(quantity);
        table.appendChild(row);
    }

}

function loadScript() {
    var firstNames = ["Fred", "Wilma", "Pebbles", "Barney", "Betty", "BamBam"];
    var lastNames = ["Flintstone", "Flintstone", "Flintstone", "Rubble", "Rubble", "Rubble"];
    var ages = [36, 34, 7, 34, 32, 8];

    for (var i = 0; i < 5; i++) {
        var tempPart = Object.create(basePart);
        tempPart.id = i + 1;
        parts[i] = tempPart;
    }

    for (var i = 0; i < firstNames.length; i++) {
        var newPerson = new Person(firstNames[i], lastNames[i]);
        newPerson.age = ages[i];
        persons[i] = newPerson;
    }

    var secTwo = document.getElementById("partTwo");
    secTwo.onclick = mouseClicked;
    }

function mouseClicked(event) {
    if(event.target.tagName == "BUTTON") 
    {
        var btn = event.target;
        var id = btn.id;
        var number = id.charAt(id.length - 1); //this is a horrible "regex" hack, but it works for single digit numbers
        var person = persons[number];
        var divPut = document.getElementById("divOutPut");
        divPut.innerText = "You found: " + "\r" + person.getDetails();
    }
    
}