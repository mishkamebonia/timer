const timer = document.querySelector('#timer')
const startPauseBtn = document.querySelector('#start-stop-btn')
const resetBtn = document.querySelector('#reset-btn')

let seconds = 0
let minutes = 0
let hours = 0

let leadingSeconds = 0
let leadingMinutes = 0
let leadingHours = 0

let timerInterval = null
let timerStatus = 'stopped'

function startTimer() {

  seconds++

  if (seconds / 60 === 1) {
    seconds = 0
    minutes++

    if (minutes / 60 === 1) {
      minutes = 0
      hours++
    }
  }

  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString()
  } else {
    leadingSeconds = seconds
  }
  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString()
  } else {
    leadingMinutes = minutes
  }
  if (hours < 10) {
    leadingHours = "0" + hours.toString()
  } else {
    leadingHours = hours
  }

  timer.innerHTML = leadingHours + ':' + leadingMinutes + ':' + leadingSeconds
}

startPauseBtn.addEventListener('click', () => {

  if (timerStatus === 'stopped') {
    timerInterval = window.setInterval(startTimer, 1000)
    startPauseBtn.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`
    startPauseBtn.style.background = 'orange'
    timerStatus = 'started'
  } else {
    window.clearInterval(timerInterval)
    startPauseBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`
    startPauseBtn.style.background = 'green'
    timerStatus = 'stopped'
  }

})

resetBtn.addEventListener('click', () => {

  window.clearInterval(timerInterval)

  seconds = 0
  minutes = 0
  hours = 0

  timer.innerHTML = '00:00:00'

  startPauseBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`
  startPauseBtn.style.background = 'green'
  timerStatus = 'stopped'

})