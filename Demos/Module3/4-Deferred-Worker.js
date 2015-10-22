// Sample worker script

self.onmessage = function (e) {
	sleep(e.data.milliseconds);
	self.postMessage({ message: 'Slept for ' + e.data.milliseconds + 'milliseconds' });
}

function sleep(miliseconds) {
	var startingTime = new Date().getTime();
	var stopTime = startingTime + miliseconds;

	while (stopTime >= new Date().getTime()) { }
}