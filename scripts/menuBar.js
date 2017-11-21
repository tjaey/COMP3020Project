function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = "Server Time: " + h + ":" + m + ":" + s + "\t\t";
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function notify(){
  var div = document.getElementById("notify");
  if(div.style.display=="block")
    div.style.display="none";
  else
      div.style.display="block";
}
