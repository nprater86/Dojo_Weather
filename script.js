let temps = [
    document.getElementById('todayHigh'),
    document.getElementById('todayLow'),
    document.getElementById('tomorrowHigh'),
    document.getElementById('tomorrowLow'),
    document.getElementById('fridayHigh'),
    document.getElementById('fridayLow'),
    document.getElementById('saturdayHigh'),
    document.getElementById('saturdayLow')
]; //adding all temps to array so we can update them all with a loop

function loadingWeather(){ //alerts user when clicking on a city
    alert('Loading weather report...');
}

function hide(element) { //hides the element when called. Used to hide .cookieBox
    element.style.display = 'none';
}

function degreeConversion(choice){ //Converts temps to C (if they are F) or F (if they are C)
    if(choice.value === 'F'){ //converts C to F if value is changed to F
        for (let i = 0; i < temps.length; i++) {
            temps[i].innerHTML = Math.round(temps[i].innerHTML*1.8+32);
        }
    } else if(choice.value === 'C') { //converts F to C if value is changed to C
        for (let i = 0; i < temps.length; i++) { 
            temps[i].innerHTML = Math.round(((temps[i].innerHTML-32)*5)/9);
        }
    }
}