let condition = 0;
let time = 0;


function start() {
  if (!condition) timer();
}
var timerId;

function stop() {
  condition = 0;
  clearTimeout(timerId);
}

function timer() {
  condition = 1;
  timerId = setInterval(function() {
    time++;
    let min = Math.floor(time / 600);
    let sec = Math.floor(time / 10);
    let ms = Math.floor(time)
    
    min = ('0' + min).slice(-2);
    sec = ('0' + (sec >= 60 ? sec % 60 : sec)).slice(-2);
    ms = ("0" + ms).slice(-1);
    document.getElementById("time").innerHTML = min + ":" + sec + "." + ms;
  }, 100);
}
function restart() {
  time = 0;
  condition = 0;
  clearTimeout(timerId);
  document.getElementById("time").innerHTML = "00:00.0";
}