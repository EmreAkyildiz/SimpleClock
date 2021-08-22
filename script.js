let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let flag=false;

var counter2 = 0;

var refreshIntervalId;
var startButton = document.getElementById("startStop")
var resetButton = document.getElementById("reset")

const secondHand = document.querySelector('[data-second-hand]')
const PRİVATE_CODE="RS4F-EK6S-X7FL-K3BR"


getSelectValue();
hideReset();

function stopWatch() {

  let hours = Math.floor(totaltime / 3600);
  let minutes = Math.floor((totaltime - (hours * 3600)) / 60);
  let seconds = totaltime - (hours * 3600) - (minutes * 60);
  console.log("seconds: " + seconds)
  console.log("minutes: " + minutes)
  console.log("hours: " + hours)
  if (hours < 10) { hours = "0" + hours; }
  if (minutes < 10) { minutes = "0" + minutes; }
  if (seconds < 10) { seconds = "0" + seconds; }
  displaySeconds = seconds.toString();
  displayMinutes = minutes.toString();
  displayHours = hours.toString();

  document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}

function hideReset() {
  resetButton.style.display = "none";
}

function getSelectValue() {
  var selectedSecond = parseInt(document.getElementById("second-select").value);
  var selectedMinute = parseInt(document.getElementById("minute-select").value);
  var selectedHour = parseInt(document.getElementById("hour-select").value);
  return totaltime = selectedSecond + selectedMinute * 60 + selectedHour * 3600;
}


function run() {
  var Seconds = parseInt(document.getElementById("second-select").value);
  var Minutes = parseInt(document.getElementById("minute-select").value);
  var Hour = parseInt(document.getElementById("hour-select").value);
  if (isNaN(Seconds) || isNaN(Minutes) || isNaN(Hour)) {
    alert("Lütfen alanları doldurun")
  }
  else {
    startButton.style.display = "none";
    resetButton.style.display = "block";
    refreshIntervalId = setInterval(function () {
      startClock(totaltime, refreshIntervalId)
    }, 1000);

  }
}

function reset() {
  setRotation(secondHand, 0);
  clearInterval(refreshIntervalId)
  totaltime = 0;
  document.getElementById("display").innerHTML = "00:00:00"
  document.getElementById("second-select").value = ""
  document.getElementById("minute-select").value = ""
  document.getElementById("hour-select").value = ""
  hideReset()
  startButton.style.display = "block";
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

function startClock(totaltime, refreshIntervalId) {
  if (totaltime > 0) {
    stopWatch();
    console.log("totaltime: " + totaltime)
    let secondsRatio = totaltime / 60
    console.log(secondsRatio)
    console.log("çalıştı")
    console.log("-------------------")
    setRotation(secondHand, secondsRatio)
    this.totaltime--;
  }
  else {
    stopWatch();
    console.log(totaltime)
    setRotation(secondHand, 0)
    console.log("durdu")
    clearInterval(refreshIntervalId);
    startButton.style.display="block"
    resetButton.style.display="none"
    getSelectValue()
   
  }
}
function activateCode(){
 
  if(!flag){
    let code = prompt("Lütfen kodu giriniz:");
    if (code=="RS4F-EK6S-X7FL-K3BR") {
      flag=true;
      document.getElementById("content").contentEditable="true";
      code="";
      console.log("if")
     }  
     else{
       console.log("else")
     }
    }
    
}


