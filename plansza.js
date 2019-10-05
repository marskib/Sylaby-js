"use strict";

let nrZestawu = "";
window.onload = ladujZestaw;

const zestaw01 = ["ba","er","kro","la","o","or","sa","ta","wa"];
const zestaw02 = ["ba2","er2","kro2","la2","o2","or2","sa2","ta2","wa2"];
const zestaw03 = ["ba3","er3","kro3","la3","o3","or3","sa3","ta3","wa3"];
const zestawy  = [zestaw01,zestaw02,zestaw03];

let sylaby = Array.from(document.getElementsByClassName('sylaba'));

let divContent = document.getElementById("content");
let divFullScr = document.getElementById("fullscr");



let handleKlikOnKwadrat = function (event) {
    divContent.style.display = "none";
    var litera = event.target.innerText;
    divFullScr.innerHTML = '<p>' + litera + '</p>';
    divFullScr.style.display = "block";
    //Zeby nie klikal jak wsciekly chociaz przez chwile:
    divFullScr.style.cursor = "none";
    divFullScr.onclick = null;
    //Pokazanie duzej litery; mozna klikac:
    setTimeout(() => divFullScr.classList.add("fullscr-anim"), 100);
    setTimeout(() => {
        divFullScr.style.cursor = "pointer";
        divFullScr.onclick = handleKlikOnBig;
    }, 1500);
    odegrajLitere(litera, 700);
}    


function ladujZestaw() {
    nrZestawu = localStorage.getItem('nrZestawu');
    var idxZ = nrZestawu-1;   //-1 bo na index w tablicy
    

    // sylaby.forEach( function(value,i) {value.innerHTML=i} ); - wzorzec parametrow
    sylaby.forEach( (value,i) => {value.innerHTML='<p>'+zestawy[idxZ][i]+'</p>'} );


    sylaby.forEach(kwadrat => kwadrat.onclick = handleKlikOnKwadrat);

}



