/* function moveArms() {
  var now = new Date();
  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr = now.getHours();
  var HOURHAND = document.getElementById("hour");
  var MINUTEHAND = document.getElementById("minute");
  var SECONDHAND = document.getElementById("second");

  if (sec == 0) {
    SECONDHAND.style.transform = "rotate(360deg)";
  } else {
    HOURHAND.style.transform = "rotate(" + (hr - 12) * 30 + "deg)";
    MINUTEHAND.style.transform = "rotate(" + min * 6 + "deg)";
    SECONDHAND.style.transform = "rotate(" + sec * 6 + "deg)";
  }
}

setInterval(moveArms, 1000); */

// Other solution

function moveArms() {
  var now = new Date();
  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr = now.getHours();
  tick = 360 / 60; // angle of 1 tick

  var secondArmPosition = tick * sec;
  var minuteArmPosition = tick * min;
  var hourArmPosition = tick * 5 * hr + (min / 60) * tick * 5;

  var HOURHAND = document.getElementById("hour");
  var MINUTEHAND = document.getElementById("minute");
  var SECONDHAND = document.getElementById("second");

  function update() {
    secondArmPosition += tick;
    minuteArmPosition += tick / 60;
    hourArmPosition += tick / 60 / 60;

    HOURHAND.style.transform = "rotate(" + hourArmPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minuteArmPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secondArmPosition + "deg)";
  }
  update();
  setInterval(update, 1000);
}
moveArms();
