//Recebendo os tempos;
const horas = document.querySelector('.horas');
const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos'); 

const body = document.querySelector('body');

const relogio = setInterval(function time() {

    //Capturando data atual;
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds(); 

    if (hr < 10)  hr = '0' + hr;
    if (min < 10)  min = '0' + min;
    if (s < 10)  s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

    hourToDay(hr);
})

function hourToDay(hour){
    const body = document.querySelector('body');
    if (hour >= 5 && hour < 18) {
      body.style.background = 'linear-gradient(120deg, #ffe53bd8, #ff2525da)';
    } else {
      body.style.background = 'linear-gradient(120deg, #1e0057, #813eb6)';
    }
}