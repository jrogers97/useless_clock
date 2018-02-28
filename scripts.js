$(document).ready(function() {
	setInterval(function() {
		let new_date = new Date();
		let hours_24 = new_date.getHours();

		let hours;
		if (hours_24 !== 0 && hours_24 !== 12) {
			hours = hours_24 % 12
		} else {
			hours = 12
		}

		let minutes = new_date.getMinutes();
		let seconds = new_date.getSeconds();
	
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