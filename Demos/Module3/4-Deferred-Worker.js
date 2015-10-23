// Sample worker script

self.onmessage = function (e) {
	var startTime = new Date().toTimeString();
	sleep(2000);
	var output = e.data.message + ' processed at ' + startTime;
	self.postMessage({ message: output });
}

function sleep(miliseconds) {
	var startingTime = new Date().getTime();
	var stopTime = startingTime + miliseconds;

	while (stopTime >= new Date().getTime()) { }
}