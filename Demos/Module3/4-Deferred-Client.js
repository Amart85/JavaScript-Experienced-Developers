function processMessage(message) {
	// Create the deferred object
	var deferred = $.Deferred();

	// Begin doing work
	var worker = new Worker('./4-Deferred-Worker.js');

	worker.onmessage = function (e) {
		// Resolve when operation completes
		// Just send the string back
		deferred.resolve(e.data.message);
	};

	worker.postMessage({ message: message });

	// return promise to caller
	return deferred.promise();
}
