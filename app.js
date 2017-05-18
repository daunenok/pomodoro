var sec; 
var timer;
var stop;
var min;

function startPomodoro(id) {
	var selector = "#" + id + "-input";
	var time = $(selector).val();
	time = time.toString();
	if (time.length == 1)
			time = "0" + time;
	$("#minutes").text(time);
	$("#seconds").text("00");

	selector = "#" + id;
	$(selector).addClass("select");
	
	time = parseInt(time) * 1000 * 60;
	if (timer) {
		clearInterval(timer);
	}
	timer = setInterval(pomodoroTimer, 1000);
	stop = setTimeout(stopTimer, time);
}

function pomodoroTimer() {
	sec = +$("#seconds").text();
	if (sec === 0) {
		min = +$("#minutes").text();
		min--;
		min = min.toString();
		if (min.length == 1)
			min = "0" + min;
		$("#minutes").text(min);
		sec = 59;
	} else {
		sec--;
	}
	sec = sec.toString();
	if (sec.length == 1)
		sec = "0" + sec;
	$("#seconds").text(sec);
}

function stopTimer(signal = true) {
	clearInterval(timer);
	clearTimeout(stop);
	$("#seconds").text("00");
	$("#minutes").text("00");
	$(".buttons button").removeClass("select");
	if (signal) {
		document.querySelector("audio").play();
	}
}	





















