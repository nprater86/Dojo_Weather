let temps = [
    document.getElementById('todayHigh'),
    document.getElementById('todayLow'),
    document.getElementById('tomorrowHigh'),
    document.getElementById('tomorrowLow'),
    document.getElementById('fridayHigh'),
    document.getElementById('fridayLow'),
    document.getElementById('saturdayHigh'),
    document.getElementById('saturdayLow')
];

function loadingWeather(){
    alert('Loading weather report...');
}

function hide(element) {
    element.style.display = 'none';
}

function degreeConversion(choice){
    if(choice.value === 'F'){
        for (let i = 0; i < temps.length; i++) {
            temps[i].innerHTML = Math.round(temps[i].innerHTML*1.8+32);
        }
    } else if(choice.value === 'C') {
        for (let i = 0; i < temps.length; i++) {
            temps[i].innerHTML = Math.round(((temps[i].innerHTML-32)*5)/9);
        }
    }
}