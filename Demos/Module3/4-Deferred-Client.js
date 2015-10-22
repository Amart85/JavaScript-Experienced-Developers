function Client() {
	var worker = new Worker('./4-Deferred.js');

	worker.onmessage = function (e) {

	};
}
