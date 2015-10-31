(function ($, root, undefined) {
	$(function () {		
		'use strict';
		 console.log('one sec');
		var inputFilled = $('.input__field--kuro');
		
		if(inputFilled.change()){
			console.log(inputFilled.change());
		}
		
	});
})(jQuery, this);
