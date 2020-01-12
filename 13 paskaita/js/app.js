"use strict"

const tasks = document.querySelector('ul'); //darbų sąrašas
const task = document.getElementById("paiesk"); //formos inputas
const addTask = document.querySelector('.pridekDarba'); //mygtukas pridedantis darbą
const removeTask = document.querySelector('.removeLastItem'); //mygtukas ištrinantis darbą

// pridedam event'ą ant mygtuko
addTask.addEventListener('click', addNewTask);
removeTask.addEventListener('click', removeItem);

function addNewTask(){ //funkcija, kuri kviečiama paspaudus mygtuką
	let li = document.createElement('li');
	li.textContent = task.value;
	tasks.appendChild(li);
}

function removeItem(){ //funkcija, kuri ištrina paskutinį elementą iš sąrašo
	let li = document.querySelector('li:last-child');
	tasks.removeChild(li);
}
// ----------------------------------------------------------

const row = document.querySelector('.eilutes');
const col = document.querySelector('.stulpeliai');
const addTable = document.querySelector('.kurtiLentele');

addTable.addEventListener('click', addTbl);

function addTbl(){
	
	let table = document.createElement('table'); //sukuriamas table elementas
	table.setAttribute("border", 1);
	
	for (let i = 0; i < row.value; i++) {
		let tr = document.createElement('tr'); //sukuriama eilute
		for (let j = 0; j < col.value; j++) {
			let td = document.createElement("td"); //sukuriamas langelis
			tr.appendChild(td); //langelis pridedamas i eilute
			td.textContent = "Eilute: " + (i + 1) + " Stulpelis: " + (j + 1); //pridedamas turinys
		}
		table.appendChild(tr); //eilute pridedama i lentele
		document.querySelector('section:first-child').appendChild(table);
	}

}



// function addTbl() {
//   // get the reference for the body
//   var body = document.getElementsByTagName("body")[0];

//   // creates a <table> element and a <tbody> element
//   var tbl = document.createElement("table");
//   var tblBody = document.createElement("tbody");

//   // creating all cells
//   for (var i = 0; i < row.value; i++) {
//     // creates a table row
//     var row = document.createElement("tr");

//     for (var j = 0; j < col.value; j++) {
//       // Create a <td> element and a text node, make the text
//       // node the contents of the <td>, and put the <td> at
//       // the end of the table row
//       var cell = document.createElement("td");
//       var cellText = document.createTextNode("cell in row "+i+", column "+j);
//       cell.appendChild(cellText);
//       row.appendChild(cell);
//     }

//     // add the row to the end of the table body
//     tblBody.appendChild(row);
//   }

//   // put the <tbody> in the <table>
//   tbl.appendChild(tblBody);
//   // appends <table> into <body>
//   body.appendChild(tbl);
//   // sets the border attribute of tbl to 2;
//   tbl.setAttribute("border", "2");
// }