let h = document.getElementById("calc").onclick = function () {
let y = document.getElementById("year").value;
let old = 2022 - y;
if (old >= 16) alert("Welcome");
else alert("False");    
}