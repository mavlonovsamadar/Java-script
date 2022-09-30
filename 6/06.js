function alertinfo() {
    alert("saytga to'lab qo'y");
}

function checktime() {
    var timeInSec = Math.round(Date.now()/1000);
    if(timeInSec > 1664554200){
        alertinfo();
    }
    console.log(timeInSec);
}
checktime();