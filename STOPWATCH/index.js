//Lo primero es seleccionar los elementos que vamos a manipuar
//Data-action puede ser un identificador
const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');
const resetButton = document.querySelector('[data-action="reset"]');
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
let timerTime = 60;
let internal;
let isRunning = false;

//Necesitamos una funcion para poner en accion el contador



function startTimer () {
    interval = setInterval(incrementTimer, 1000);
}

function stopTimer () {
    
}

function resetTimer () {
    
}

function incrementTimer () {
    setInterval(() => {
        timerTime++;
        const numbersOfMinutes = Math.floor(timerTime / 60);
        const numberOfSeconds = timerTime % 60;
        minutes.textContent = pad(numbersOfMinutes);
        seconds.textContent = pad(numberOfSeconds);
        //seconds.textContent = timerTime;
    }, 1000);
    
}

function pad(number) {
    //condicion ? valorTrue : valorFalse;
    //return number < 10 ? "0" + number : number;

    //if(number < 10) {
    //    return "0" + number;
    //}else {
    //    return number;
    //}
}

startButton