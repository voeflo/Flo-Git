var startTimer;

startTimer = function() {
  var time;
  time = 0;
  setInterval((function() {
    var hour, min, sec, str;
    time++;
    sec = time % 60;
    min = (time - sec) / 60 % 60;
    hour = (time - sec - (min * 60)) / 3600;
    debugger
    count = hour + ':' + ('0' + min).slice(-2) + ':' + ('0' + sec).slice(-2);
    $('.responseTime').text(count);
  }), 1000);
};

$( document ).ready(function() {
    startTimer();
});
