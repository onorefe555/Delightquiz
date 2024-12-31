const display = document.getElementById("display")


let timer = null
let startTime = 0
let elapseTime = 0
let isRunning = false

let alarm = new Audio("../alarm/alarm.mp3")

 function start() {
    if (!isRunning ) {
        startTime = Date.now() - elapseTime;
        timer = setInterval(update, 10)
        isRunning = true
    }

 }

 function Stop() {
    if (isRunning) {
       clearInterval(timer); 
       elapseTime = Date.now() - startTime;
       isRunning = false
    }
       alarm.play()
 }

 function reset() {
    clearInterval(timer)
     timer = null
     startTime = 0
     elapseTime = 0
     isRunning = false
     display.textContent = "00:00:00:00"
 }
 

 function update() {
    
    const currentTime = Date.now()
    elapseTime = currentTime - startTime

    let hour = Math.floor(elapseTime/(1000*60*60))
    let min = Math.floor(elapseTime/(1000*60) %60)
    let sec = Math.floor(elapseTime/1000 %60)
    let millisecond = Math.floor(elapseTime % 100 / 10)

    hour = String(hour).padStart(2, "0")
    min = String(min).padStart(2, "0")
    sec = String(sec).padStart(2, "0")
    millisecond = String(millisecond).padStart(2, "0")

    display.textContent = `${hour}:${min}:${sec}:${millisecond}`
 }
 