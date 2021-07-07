// Select color input
// Select size input
var size = document.getElementById('sizePicker');
var color = document.getElementById("colorPicker");

// identifying the submit button
var submit = document.getElementById('submit');

// When size is submitted by the user, call makeGrid()
submit.addEventListener('click', function(height, width){
	makeGrid(height, width);
});

function makeGrid(event) {
  	event.preventDefault();
  	//table, height and width variables declared to create the pixel canvas
	var table = document.getElementById('pixelCanvas');
	var height = document.getElementById('inputHeight').value;
	var width = document.getElementById('inputWidth').value;
	//creating a blank table in the HTML
  	table.innerHTML = "";
  	//build table depending on values entered by the user.  Reviewed the knowledge area to get the table to build.
  	for (let r = 1; r < height; r++) {
    	let row = document.createElement("tr");
    	for (let c = 0; c < width; c++) {
      		let cell = document.createElement("td");
      		row.appendChild(cell); //append the column to the table
      		cell.addEventListener("click", function (cellColor) {
        		cellColor.target.style.backgroundColor = color.value;  //set background color to user selection.
      		});
    	}
    table.appendChild(row);
    //append the row to the table.
    //The placement of this action was identified on the knowledge area, as initially had this after declaring the row variable.
  	}
}


