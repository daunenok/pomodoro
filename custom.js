var sec; 
var timer;
var stop;

function startPomodoro() {
	$("#seconds").text("25");
	$("#pomodoro").addClass("select");
	timer = setInterval(pomodoroTimer, 1000);
	stop = setTimeout(stopTimer, 25000);
}

function startShort() {
	$("#seconds").text("05");
	$("#short").addClass("select");
	timer = setInterval(pomodoroTimer, 1000);
	stop = setTimeout(stopTimer, 5000);
}

function startLong() {
	$("#seconds").text("10");
	$("#long").addClass("select");
	timer = setInterval(pomodoroTimer, 1000);
	stop = setTimeout(stopTimer, 10000);
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