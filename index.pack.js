
//function logArgument(someArgument) {

    //console.log("The argument is a " + typeof someArgument);

    //if(typeof someArgument === "function"){

        //someArgument();
    //}
    //else {
        //console.log("The argument is not a Function");
    //}
    
    //}

//function myFunction() {
    //console.log("I am in the function");

//}

//const myFunction = function() {
    //console.log("I am in the function");

//}

//logArgument(myFunction);



//const colours = ["red", "green", "blue", "orange", "yellow"];

//for(let i = 0; i < colours.length; i++) {

    //if(colours[i] === "blue") {
        //continue;
    //}

   //{ if(i === 1) 
        //break;
    //}

    //console.log(colours[i]);
//}
//const cars = [
    //{
        //make: "bmw",
        //colour: "blue"
    //},
    //{
        //make: "toyota",
        //colour: "green"
    //}
//]

//for(let i = 0; i < colours.length; i++) {
    //console.log(colours[i]);
//}

//cars.forEach(function(item, index) {
    //console.log("Index" + index + ": " + item.make);
//});

//setTimeout(someFunction, 2000);

//function printSomething() {
    //console.log("One");
//}




//const loading = document.querySelector(".loader");

//setTimeout(function() {
    //loading.innerHTML = "Done loading"
//}, 1000);


//let count = 0;

//const intervalId = setInterval(function() {

    //count++;

//if(count === 5) {
    //clearInterval(intervalId);
//}
    //console.log(count);
//}, 1000);


//const container = document.querySelector(".container");

//let counter = 0;

//function createHTML() {

    //counter++;

    //if(counter === 4) {
        //clearInterval(secondIntervalId);
    //}

    //container.innerHTML += `<div class="item">${counter}</div>`;

//}

//const secondIntervalId = setInterval(createHTML, 1500);


//const noteInput = document.getElementById("note-input");
//const addNote = document.getElementById("add-note");
//const notes = document.getElementById("notes");

//addNote.onclick = function(){
    //notes.innerHTML += `<li>${noteInput.value}<button>Mark as done</button></li>`;
    //const listItems = document.querySelectorAll("li");
    //listItems.forEach(function(li){
        //li.onclick = function(event){
            //this.classList.toggle("checked-off");
        //}
    //})
//}

//OR YOU CAN DO IT LIKE THIS

//addNote.onclick = function(){
    //const listItem = document.createElement("li");
    //listItem.innerHTML = `${noteInput.value} <button>Mark as done</button>`;
    //listItem.onclick = function(){
        //this.classList.toggle("checked-off");
    //}
    //notes.appendChild(listItem);
//}

//const remainder = 8 % 3;

//console.log(remainder);

//const table = document.querySelector("table");

//for(let i = 1; i <= 10; i++) {

    //let className = "";

    //if(i % 2 === 0) {
        //className = "highlight";
    //}
    //table.innerHTML += `<tr class="${className}">
                        //<td>${i}</td>
                        //<td>Text Content</td>
                        //</tr>`;
//}


//const dropdown = document.querySelector("select");

//dropdown.onchange = function() {
    //console.log(event.target.value);

    //const selectedValue = this.value;

    //for
//}

//Module 3

//const test = "false";

//if(test) {
    //console.log("truthy");

//}
//else {
    //console.log("falsy");
//}

//const results = [
    //{
        //name: " ",
        //alive: true
    //},
    //{
        //name: "",
        //alive: false
    //},
//];

//results.forEach(function(result) {

    //let alive = "Unknown";

    //if(result.alive !== null) {
        //alive = result.alive;
    //}

    
    //console.log(alive);
//})


//API KEY
//5f3b1807d5b64e5e84feeba8476b6ea2


const url = "https://cat-fact.herokuapp.com/facts";

async function getCats() {

    const response = await fetch(url);

    const results = response.json();

    console.log(results);
}

getCats();