var firstNames = ["Fred", "Wilma", "Pebbles", "Barney", "Betty", "BamBam"];
var lastNames = [ "Flintstone", "Flintstone", "Flintstone", "Rubble", "Rubble",
"Rubble"];
var ages = [36, 34, 7, 34, 32, 8];

function showInnerText() {
    var d = document.getElementById("pOne").innerText;
    alert(d);
}

function showInnerHTML() {
    var d = document.getElementById("pOne").innerHTML;
    alert(d);
}

function numberList() {
    var d = document.getElementsByTagName("li");
    for (var i = 0; i < d.length; i++) {
        var li = d[i];
        var num = i + 1;
        li.innerText += " " + num;
    }
}


function markRows() {
    var tr = document.getElementById("tblMarkRows").getElementsByTagName("tr");
    for (var i = 0; i < tr.length; i++) {
        if (i % 2 != 0)
            tr[i].className = "other";
    }
}

function addRows() {
    var tblRows = document.getElementById("tblAddRows");
    /*tableRows has a first child called 'tbody'
     * so it made sense to add tr children to the 'tbody' node
     */
    var tbl = tblRows.firstElementChild;
    for (var i = 0; i < firstNames.length; i++) {
        var row = document.createElement("tr");
        var first = document.createElement("td");
        var last = document.createElement("td");
        var age = document.createElement("td");
        first.innerText = firstNames[i];
        last.innerText = lastNames[i];
        age.innerText = ages[i];
        row.appendChild(first);
        row.appendChild(last);
        row.appendChild(age);
        tbl.appendChild(row);
    }

    //had to do this after for loop because tbl already had a tr element
    var trs = tblRows.getElementsByTagName("tr");
    for (var i = 0; i < trs.length; i++) {
        if (i % 2 != 0)
            trs[i].className = "other";
    }
}

//these append the div to the end of the document within the body
function addSuccess() {
    var div = document.createElement("div");
    div.className = "success";
    div.innerText = "This is a success";
    document.body.appendChild(div);
}

function addWarning() {
    var div = document.createElement("div");
    div.className = "warning";
    div.innerText = "This is a warning";
    document.body.appendChild(div);
}

function addError() {
    var div = document.createElement("div");
    div.className = "error";
    div.innerText = "This is an error";
    document.body.appendChild(div);
}