/*The year color is changing every 1 second
The date and time background color is changing every on seconds
Completed challenge has background green
Ongoing challenge has background yellow
Coming challenges have background red*/

/*H1*/
const title = document.querySelector('h1');
title.style.fontSize = "2rem";
title.style.fontFamily = "'Open Sans', sans-serif";
title.style.margin = "0px";
title.style.textAlign = "center";

/*YEAR SPAN*/
const yearColorChanging = document.querySelector('span');
yearColorChanging.style.fontSize = "2.5rem";
let colorArray = ["red", "lightblue", "blue", "green", "gray", "yellow", "violet", "pink", "orange"];
let randomIndexNumber = 0;
function yearColor(){
    yearColorInterval = setInterval(randomYearColor,1000);
}
function randomYearColor(){
    for(let i = 0;i < 9;i++){
        let randomNum = Math.round(Math.random()*9);
        if (randomIndexNumber === randomNum){
            randomNum = randomNum++;
            randomIndexNumber = randomNum;
        } else {
            randomIndexNumber = randomNum;
        }
    }
    //console.log(randomIndexNumber);
    yearColorChanging.style.color = colorArray[randomIndexNumber];
}
yearColor();
//habria que mejorar el codigo porque a veces se repiten los index.

/*H2*/
const daysOfJs = document.querySelector('h2');
daysOfJs.style.fontSize = "1rem";
daysOfJs.style.textDecoration = "underline";
daysOfJs.style.fontWeight = "lighter";
daysOfJs.style.fontFamily =  "'Open Sans', sans-serif";
daysOfJs.style.textAlign = "center";

/*BOX DATE*/
const boxDate = document.querySelector('#boxDate');
boxDate.style.padding = ".5rem";
boxDate.style.border = "2px solid black";
boxDate.style.backgroundColor = "red";

function boxActualDate(){
    actualDateInterval = setInterval(actualDate,1000);
    changeBgColor = setInterval(randomColor, 1000);
}
function actualDate(){
    const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];
    let date = new Date();
    let month = date.getMonth();
    let day = date.getDate();
    if (day < 10) day = "0" + day;
    let year = date.getFullYear();
    let hour = date.getHours();
    if (hour < 10) hour = "0" + hour;
    let min = date.getMinutes();
    if (min < 10) min = "0" + min;
    let sec = date.getSeconds();
    if (sec < 10) sec = "0" + sec;
    //console.log(monthArray[month] + " " + day + ", " + year + " " + hour+":"+min+":"+sec);
    let actualDate = `${monthArray[month]} ${day}, ${year} ${hour}:${min}:${sec}`;
    boxDate.innerHTML = actualDate;
    boxDate.style.display = "block";
}

function randomColor(){
    for(let i = 0;i < 9;i++){
        let randomNum = Math.round(Math.random()*9);
        if (randomIndexNumber === randomNum){
            randomNum = randomNum++;
            randomIndexNumber = randomNum;
        } else {
            randomIndexNumber = randomNum;
        }
    }
    //console.log(randomIndexNumber);
    boxDate.style.backgroundColor = colorArray[randomIndexNumber];      
}
//habria que mejorar el codigo porque a veces se repiten los index.
boxActualDate();

const lista = document.getElementsByTagName('ul');
const items = document.querySelectorAll('li');
items.forEach((item, i) => {
    item.style.listStyle = "none";
    //item.style.width = "25rem";
    //item.style.padding = "1rem 10rem 1.5rem 15rem";
    item.style.border = "1px solid white";
    item.style.fontFamily =  "'Open Sans', sans-serif";
    if (i == 0){
        item.style.backgroundColor = "#5fb85c";
    } else if (i == 1){
        item.style.backgroundColor = "#fce06d";
    } else {
        item.style.backgroundColor = "#e85656";
    }
});