// Select color input
// Select size input
let size = document.getElementById('sizePicker');
let color = document.getElementById("colorPicker");
let table = document.getElementById('pixelCanvas');
const inputHeight = document.getElementById('inputHeight'); // user input value - from review suggestion
const inputWidth = document.getElementById('inputWidth'); // user input value - from review suggestion

// identifying the submit button
let submit = document.getElementById('submit');

// When size is submitted by the user, call makeGrid()
submit.addEventListener('click', function(height, width){
	makeGrid(height, width);
});

// Function to create the pixel canvas on the website.  
// The user enters the height and width of the canvas, which updates lines 21 and 22. 
// The height and width values are used in lines 27 and 29 to create the canvas.
// once the canvas is built, the user selects the color they would like, which updates row 32 with the value.
function makeGrid(event) {
  	event.preventDefault();
  	// height and width values declared to create the pixel canvas
	let height = inputHeight.value;
	let width = inputWidth.value;
	//creating a blank table in the HTML
  	table.innerHTML = "";
  	//build table depending on values entered by the user.  Reviewed the knowledge area to get the table to build.
  	for (let r = 0; r < height; r++) {
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


