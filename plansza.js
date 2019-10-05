window.onload = ladujZestaw;

function ladujZestaw() {
    // alert("W ladujZestaw()");
    // var zestaw = dajWartoscRadio(".zestawy lista");
    var zestaw = dajWartoscRadio("rgzestawy");

    console.log("zestaw nr: ", zestaw);



}


function dajWartoscRadio(RGrupa) {
    var radios = document.getElementsByName(RGrupa);
    // var radios = document.querySelectorAll(".zestawy lista");
    console.log("radios: ",radios);
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
            break;
        }
    }
}