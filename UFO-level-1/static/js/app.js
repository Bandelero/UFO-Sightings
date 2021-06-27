// from data.js
var tableData = data;

// YOUR CODE HERE!

//Using the UFO dataset provided in the form of an array 
//of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

var tbody = d3.select("tbody")
//Selfnote: Anything we do to tbody will be automatically reflected in the html
tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
    });
});






