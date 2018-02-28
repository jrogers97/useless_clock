
$(document).ready(function() {
	setInterval(function() {

		var new_date = new Date();
		var hours_24 = new_date.getHours();

		var hours;
		if (hours_24 !== 0 && hours_24 !== 12) {
			hours = hours_24 % 12
		} else {
			hours = 12
		}

		var minutes = new_date.getMinutes();
		var seconds = new_date.getSeconds();
	
		var hours_str = hours.toString();
		var minutes_str = minutes.toString();
		var seconds_str = seconds.toString();

		$(".hour").removeClass('highlight');
		$(".hour." + hours_str).addClass('highlight');

		$('.minute').removeClass('highlight');
		$(".minute." + minutes_str).addClass('highlight');

		$('.second').removeClass('highlight');
		$('.second.' + seconds_str).addClass('highlight');

		// console.log("hours: ", hours, "\n",
		// 	"minutes: ", minutes, "\n",
		// 	"seconds: ", seconds);

	}, 1000);
});
