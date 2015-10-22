// Worker script

self.onmessage = function (e) {
	// retrieve data.
	// In this simple example it's an object
	var data = e.data;

	// The object has one property called name
	// "Process" the name
	var processedName = data.name + ' - Processed!';

	// Create object to return to page
	// Uses JSON (Key/Value pairs)
	var result = { processedName: processedName };
	
	self.postMessage(result);
};