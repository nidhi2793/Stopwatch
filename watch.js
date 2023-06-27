let [milisec, sec, min, hr] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer");
let int = null;

document.getElementById("start").addEventListener("click", () => {
  if (int != null) {
    clearInterval(int);
    console.log(int);
  }
  int = setInterval(displayTimer, 10);
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(int);
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(int);
  [milisec, sec, min, hr] = [0, 0, 0, 0];
  timeRef.innerHTML = "00:00:00:000";
});

function displayTimer() {
  milisec += 10;
  if (milisec == 1000) {
    sec++;
    milisec = 0;
    if (sec == 60) {
      min++;
      sec = 0;
      if (min == 60) {
        hr++;
        min = 0;
      }
    }
  }
  let h = hr < 10 ? "0" + hr : hr;
  let m = min < 10 ? "0" + min : min;
  let s = sec < 10 ? "0" + sec : sec;
  let ms =
    milisec < 10 ? "00" + milisec : milisec < 100 ? "0" + milisec : milisec;
  timeRef.innerHTML = `${h}:${m}:${s}:${ms}`;
}
