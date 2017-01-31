var sec; 
var timer;
var stop;

function startPomodoro(id, time) {
	var selector = "#" + id;
	$(selector).addClass("select");
	$("#seconds").text(time);
	time = parseInt(time) * 1000;
	timer = setInterval(pomodoroTimer, 1000);
	stop = setTimeout(stopTimer, time);
}

function pomodoroTimer() {
	sec = +$("#seconds").text();
	sec--;
	sec = sec.toString();
	if (sec.length == 1)
		sec = "0" + sec;
	$("#seconds").text(sec);
	sec = parseInt(sec);
}

function stopTimer() {
	clearInterval(timer);
	clearTimeout(stop);
	$("#seconds").text("00");
	$(".buttons button").removeClass("select");
}	