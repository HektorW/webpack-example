define([], function() {

	return {
		style: 'background-color: indigo; color: yellow;',

		log: function() {
			var message = [].slice.call(arguments).join(' ');

			console.log('%c' + message, this.style);
		}
	};

});