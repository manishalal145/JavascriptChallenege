// YOUR CODE HERE!

// from data.js
var tableData = data;
console.log(tableData);

//Filtering data on the datetime basis:

// Selecting the button
var button = d3.select("#filter-btn");

// Selecting the form
var form = d3.select("#form");

// Creating  event handlers 
button.on("click", handlesubmit);
form.on("submit",handlesubmit);

// Completing the event handler function for the form
function handlesubmit() {
  // Preventing the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue)

  if(inputValue == ""){
      UFOTable(tableData);
  }
  else{
    var filteredData = tableData.filter(UFOdate => new Date (UFOdate.datetime).toDateString() === new Date(inputValue).toDateString());
    UFOTable(filteredData);
    document.getElementById("myForm").reset();
  }
}

// Appending filtered table data to the web page
function UFOTable(tableData){
    // Get a reference to the table body
    var tbody = d3.select("tbody");
    // Clear webpage table
    tbody.html("");
    // Show data on webpage
    tableData.forEach(function(UFOReport) {
       // Append table row `tr` for each UFO sighting value
       var row = tbody.append("tr");
       Object.entries(UFOReport).forEach(function([key, value]) {
       var cell = row.append("td");
       cell.text(value);
    });
});
}


