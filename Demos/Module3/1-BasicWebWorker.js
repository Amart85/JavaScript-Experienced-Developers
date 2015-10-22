// Worker script
// Code executes immediately upon script load

// add event handler to onmessage
// Event raised when page sends message to worker
// self represents the worker
self.onmessage = function (e) {
	// retrieve data.
	// In this simple example it's a string
	var message = e.data;

	// "Process" the message
	message += " - Processed!";

	// Send message back to page
	self.postMessage(message);
};