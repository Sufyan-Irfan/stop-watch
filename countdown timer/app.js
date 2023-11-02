let timerdisplay = document.querySelector('.time')
let stopbtn = document.getElementById("stopbtn")
let startbtn = document.getElementById("startbtn")
let resetbtn = document.getElementById("resetbtn");

let seconds = 0
let interval = null



startbtn.addEventListener('click' , start)
stopbtn.addEventListener('click' , stop)
resetbtn.addEventListener('click' , reset)

function timer(){
    seconds++

    let hrs = Math.floor(seconds / 3600)
    let secs = seconds % 60
    let mins = Math.floor((seconds - (hrs*3600)) / 60)

    if(secs < 10) secs = '0' + secs
    if(mins < 10) mins = '0' + mins
    if(hrs < 10) hrs = '0' + hrs

    timerdisplay.innerHTML = `${hrs}:${mins}:${secs}`
}

function start (){
    if (interval){
        return
    }

    interval = setInterval(timer , 1000)
}

function stop(){
    clearInterval(interval)
    interval = null
}

function reset (){
    stop()
    seconds = 0
    timerdisplay.innerHTML = '00:00:00'
}