"use strict";

function przejmijZestaw() {
    var zestaw = dajWartoscRadio("zestawy");
    //Przekazania parametru za pomocą localStorage na inną 'formę'/'activity':
    localStorage.setItem('nrZestawu',zestaw);
}


function dajWartoscRadio(RGrupa) {
   var radios = document.getElementsByName(RGrupa);
    //console.log("radios: ",radios);
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
            break;
        }
    }
}