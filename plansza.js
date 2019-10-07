"use strict";

let nrZestawu = "";
window.onload = ladujZestaw;

const zestaw01 = ["ba", "er", "kro", "la", "o", "or", "sa", "ta", "wa"];
const zestaw02 = ["ze", "dy", "eł", "in", "kra", "le", "mar", "mu", "do"];
const zestaw03 = ["ja", "ty", "on", "my", "wy", "tam", "kto", "daj", "weź"];
const zestawy = [zestaw01, zestaw02, zestaw03];

//let sylaby = Array.from(document.getElementsByClassName('sylaba')); -> mozna tak, mozna tak ->:
let sylaby = Array.from(document.querySelectorAll('.sylaba'));

let divContent = document.getElementById("content");
let divFullScr = document.getElementById("fullscr");


let handleKlikOnKwadrat = function (event) {
    divContent.style.display = "none";
    var sylaba = event.target.innerText;
    divFullScr.innerHTML = '<p>' + sylaba + '</p>';

    // document.querySelector('.fullscr').style.color="maroon";
    // document.querySelector('.fullscr p').style.backgroundColor="maroon";
    //podniesienie troche w gore - bardziej na srodku...:
    divFullScr.querySelector('p').style.color="maroon";
    divFullScr.querySelector('p').style.marginTop = "-20px";


    divFullScr.style.display = "block";
    //Zeby nie widzial kursora, wiec nie klikal niepotrzebnie:
    divFullScr.style.cursor = "none";
    //Pokazanie pojedynczej sylaby na calym ekranie, odegranie, potem przywrocenie kursora:
    setTimeout(() => divFullScr.classList.add("fullscr-anim"), 100);
    //odegrajSylabe(sylaba, 700);
        //Powrot do ekranu z 9-ma sylabami:
    //przywrocWszystko(3000);

    sekwencyjnieWykonaj(grajNowa, przywrocNowa);
}


function sekwencyjnieWykonaj(f1,f2){
    f1();
    f2();
}

function grajNowa() {
    // alert("w grajNowa");

    var plik = "snd/" + "kto" + ".ogg";
    var sylabaSnd = new Audio(plik);
    sylabaSnd.play();
}

function przywrocNowa() {
    //alert("p1");
    divFullScr.classList.remove("fullscr-anim");
    divFullScr.style.display = "none";
    divContent.style.display = "block";
}


function przywrocWszystko(delay) {
    setTimeout(() => {
        divFullScr.classList.remove("fullscr-anim");
        divFullScr.style.display = "none";
        divContent.style.display = "block";
    }, delay);
}

function odegrajSylabe(sylaba, delay) {
    var plik = "snd/" + sylaba + ".ogg";
    var sylabaSnd = new Audio(plik);
    setTimeout(() => sylabaSnd.play(), delay);
}


function ladujZestaw() {
/* Wyswietlenie sylab na kwadratach; dodanie handlera na kwadraty */    

    nrZestawu = localStorage.getItem('nrZestawu');
    var idxZ = nrZestawu - 1;   //-1 bo na index w tablicy

    // sylaby.forEach( function(value,i) {value.innerHTML=i} ); - wzorzec dla parametrow
    sylaby.forEach((value, i) => { value.innerHTML = '<p>' + zestawy[idxZ][i] + '</p>' });

    sylaby.forEach(kwadrat => kwadrat.onclick = handleKlikOnKwadrat);
}



