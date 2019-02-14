const fs = require('fs');
const readline = require('readline-sync');
//var addEvent = require('./addEvent');
var formatTime = require('./formatTime');

function userEntry() {
	var eventName = readline.question('What is your event?: ');
	var eventSummary = readline.question('Provide a breif summary of your event:');
	var Location = readline.question('What room does your event take place in?: ')
	var eventDate = readline.question('What date does your event take place on?: ');
	var startTime = readline.question('What time does your event start at?: ');
	var endTime = readline.question('What time does your event end at?: ');

	console.log(eventName +" " + eventSummary +" "+ Location+" "+ eventDate +" "+ startTime +" "+ endTime);
	var eventStart = formatTime.formatTime() 
	console.log(formatTimes(eventDate,startTime));
	console.log(formatTimes(eventDate,endTime));
}
function formatTimes(date, time) {
	return date+'T'+time+':00';
}



userEntry();