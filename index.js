window.onload = przejmijZestaw;

function przejmijZestaw() {
    var zestaw = dajWartoscRadio("rgzestawy");

    console.log("w index, zestaw nr: ", zestaw);



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