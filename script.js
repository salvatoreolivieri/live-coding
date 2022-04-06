
const now = new Date();
console.log(now);

let h = now.getHours();
let min = now.getMinutes();
let sec = now.getSeconds();

const missedTime = 60 - min;
console.log(missedTime);

if (h < 10){
  h = "0" + h;
}
console.log(h);

if (min < 10){
  min = "0" + min;
}
console.log(min);

if (sec < 10){
  sec = "0" + sec;
}
console.log(sec);


const orario = `${h}:${min}:${sec}`;


document.getElementById("output").innerHTML = orario ;

let messaggioFineLezione;

if (missedTime < 15){
  messaggioFineLezione = "Manca poco"
} else{ 
  messaggioFineLezione = "Manca tanto"
}


document.getElementById("output").innerHTML += " " +messaggioFineLezione