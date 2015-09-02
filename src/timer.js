
function Timer() {
	this.startTime = 0;
	this.endTime = 0;
}
Timer.prototype = {
	now: function() {
		return performance.now();
	},

	start: function() {
		this.startTime = this.now();
	},

	stop: function() {
		this.endTime = this.now();
	},

	elapsed: function() {
		if (!this.startTime) {
			return 0;
		}

		if (!this.endTime) {
			return this.now() - this.startTime;
		}

		return this.endTime - this.startTime;
	},

	print: function() {
		console.log('Time elapsed: ' + this.elapsed() + 'ms');
	}
};


module.exports = Timer;