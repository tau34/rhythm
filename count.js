var intervalId;
var isRunning = false;

function switc() {
    isRunning = !isRunning;
    if (isRunning) {
        var OE = 0;
        function countUp() {
            $("h1")[0].innerHTML = $("h1")[0].innerHTML * 1 + 1;
            $("audio")[OE].play()
            OE += 1;
            OE %= 5;
        }
        var bpm = $("input")[0].value;
        intervalId = setInterval(countUp, 60000 / bpm);
        $(".switch")[0].innerHTML = "reset"
    } else {
        clearInterval(intervalId)
        $("h1")[0].innerHTML = 0;
        $(".switch")[0].innerHTML = "start"
    }
}