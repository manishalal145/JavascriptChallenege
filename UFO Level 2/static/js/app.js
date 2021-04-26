// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!
//Filtering data on the various search filters:

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

  // Select the input value from the form
  var datetime = d3.select("#datetime").property("value");
  var city = d3.select("#city").property("value").toLowerCase();
  var state = d3.select("#state").property("value").toLowerCase();
  var country = d3.select("#country").property("value").toLowerCase();
  var shape = d3.select("#shape").property("value").toLowerCase();

  if(datetime){
    var filteredData = tableData.filter(UFOdate => new Date(UFOdate.datetime).toDateString()=== new Date(datetime).toDateString());
    UFOTable(filteredData);
    document.getElementById("myForm").reset();
  }
  if (city){
    var filteredData = tableData.filter(UFOcity => UFOcity.city === city);
    UFOTable(filteredData);
    document.getElementById("myForm").reset();
  }
  if (state){
    var filteredData = tableData.filter(UFOstate => UFOstate.state === state);
    UFOTable(filteredData);
    document.getElementById("myForm").reset();
  }
  if (country){
    var filteredData = tableData.filter(UFOcountry => UFOcountry.country === country);
    UFOTable(filteredData);
    document.getElementById("myForm").reset();
  }
  if (shape){
      var filteredData = tableData.filter(UFOshape => UFOshape.shape === shape);
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




