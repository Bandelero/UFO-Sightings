// from data.js
var tableData = data;

// YOUR CODE HERE!

//Using the UFO dataset provided in the form of an array 
//of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

var tbody = d3.select("tbody")
//Anything we do to tbody will be automatically reflected in the html
tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
    });
});

//Use a date form in your HTML document and write JavaScript code that will listen for events and search through 
//the date/time column to find rows that match user input

var button = d3.select("#filter-btn");

var form = d3.select("#form");

var ddt = d3.select("#dropdownTest");
ddt.appendChild(new Option("testval", "test"));
//Event handlers

button.on("click", runEnter);//This function sets up the event for the button and form. It can be any variable name
form.on("submit", runEnter);


function runEnter() {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    var inputElementCity = d3.select("#city");
    var inputElementState = d3.select("#state");
    var inputElementCountry = d3.select("#country");
    var inputElementShape = d3.select("#shape");


    var inputValue = inputElement.property("value");
    var inputValueCity = inputElementCity.property("value");
    var inputValueState = inputElementState.property("value");
    var inputValueCountry = inputElementCountry.property("value");
    var inputValueShape = inputElementShape.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData;

    if (inputValue != "") {
        filteredData = filteredData.filter(row1 => row1.datetime === inputValue);
    }
    if (inputValueCity != "") {
        filteredData = filteredData.filter(row2 => row2.city === inputValueCity); 
    }
    if (inputValueState != "") {
        filteredData = filteredData.filter(row3 => row3.state === inputValueState);
    }
    if (inputValueCountry != "") {
        filteredData = filteredData.filter(row4 => row4.country === inputValueCountry); 
    }
    if (inputValueShape != ""){
        filteredData = filteredData.filter(row5 => row5.shape === inputValueShape); 
    }
    // console.log(filteredData);
    
  // Then, select the unordered list element by class name
  //var list = d3.select("tbody");

  // remove any children from the list
  tbody.html("");

  //var datedTBody = d3.select("tbody");

  filteredData.forEach((datedUfoSighting) => {

        var row = tbody.append("tr");
        Object.entries(datedUfoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
      });

  }); 
};

// Using multiple input tags and/or select dropdowns, write JavaScript 
// code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:





