// Worker script

self.onmessage = function (e) {
	// retrieve data.
	// In this simple example it's an object
	var data = e.data;

	// create result object
	var result = null;

	// Object has a state property
	if (data.state === "START") {
		// Begin process
		// Simple example: Send started state
		result = { state: "STARTED" };
	} else if(data.state === "STOP") {
		// End process
		// Simple example: Send stopped state
		result = { state: "STOPPED" }
	} else {
		// "Process" the name
		var processedName = data.name + ' - Processed!';
		result = { processedName: processedName };
	}
	
	self.postMessage(result);
};