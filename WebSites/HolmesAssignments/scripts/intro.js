var myArray = [];

function hello() {
    alert("Hello All");
}


function numberCombiner(x, y) {
    var add = x + y;
    var subtract = x - y;
    var multiply = x * y;
    var divide = x / y;
    var results = "Concat: " + x + y + "\n"
        + "Add: " + add + "\n"
        + "Subtract: " + subtract + "\n"
        + "Multiply: " + multiply + "\n"
        + "Divide: " + divide + "\n";
    alert (results);
}

//prints out loop of variables
function looper() {
    var oneToTen = "";
    for (var i = 1; i <= 10; i++) {
        oneToTen += i + " ";
    }
    alert(oneToTen);
}

function fahrenheitToCelsius(degreesF){
    var degreesC = (degreesF - 32) * 5 / 9;
    alert(degreesF + " degrees in Fahrenheit is " + degreesC + " degrees Celcius");
}

function celciusToFahrenheit() {
    var degreesF = arguments[0] * 9 / 5 + 32;
    alert(arguments[0] + " degrees in Celcius is " + degreesF + " degrees Fahrenheit");
}

//adds up every odd valued number in an array and prints the result
function sumOdd() {
    if (myArray.length >0 && typeof(myArray[0] != 'undefined')){
        var sum = 0;
        for (var i = 0; i < myArray.length; i++) {
            //first doing some type checking
            //this rejects any floats or doubles
            if (typeof(myArray[i]) === "number" && (myArray[i] - 1)% 2 == 0) {
                sum += myArray[i];
            }
        }
        alert("Sum of odds is: " + sum);
    }

    else {
        for (var i = 0; i <= 10; i++) {
            myArray[i] = i;
        }
        alert("We had an empty array. Please run Sum the Odds again.");
    }
}


