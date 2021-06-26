// from data.js
var tableData = data;

// YOUR CODE HERE!

//Using the UFO dataset provided in the form of an array 
//of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
var tbody = d3.select("tbody")

data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value)
    });
});

//Use a date form in your HTML document and write JavaScript code that will listen for events and search through 
//the date/time column to find rows that match user input

var button = d3.select("#filter-btn");

var form = d3.select("#form");

//Event handlers

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);





};





