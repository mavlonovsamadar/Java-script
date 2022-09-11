document,document.querySelector('#test').onmousemove = function (event) {
    event = event || window.event;
    // console.log(event);
    document.querySelector("#offX").innerHTML = event.offsetX;
    document.querySelector("#offY").innerHTML = event.offsetY;

}