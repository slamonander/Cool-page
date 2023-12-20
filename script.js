// show time
const time = document.getElementById('time')

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    hour = hour % 12 || 12;


    time.innerHTML =`${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    setTimeout(showTime, 1000);
}

function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// setting the greetings
function setGreeting() {
    var quotes = [
        'you can do this.',
        'we\'re here for you.',
        'chase your dreams.',
        'talk. i\'ll listen.',
        'you\'re not alone.'
    ]

    var randomNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById('greeting').innerHTML = quotes[randomNum];
}

showTime();
setGreeting();