document.getElementById("calc").onclick = function() {
    let flat = document.getElementById("flat").value;
    // vnutri flat stroka
    flat = parseInt(flat);
    // chislo
    if(flat >= 1 && flat <= 20) alert("the 1st block");
    else if(flat >= 21 && flat <= 48) alert ("2nd block");
    else if(flat >= 49 && flat <= 90) alert ("3rd block");
    else  alert ("False");
}