// Project 4: My Library
// Mark A. Blaine
// SDI 1206

var markoLibrary = function(){
	
	// CHECK PHONE NUMBER FORMAT
	// Uses a regular expression to look for three digits followed by a dash, followed by another three digits, a dash and four more digits.  The first digit of the area code has to be a 2 or higher, since area codes do not start with 1 or 0.
	var checkPhoneNumber = function (number){
		var target = /^([2-9]?)([0-9]{2})[-]?([0-9]{3})[-]?([0-9]{4})$/;
		if (target.test(number)) {
			return true;
		} else {
			return false;
		};
	};
		
	// RETURNS
	return {
		"checkPhoneNumber":checkPhoneNumber
	};
};

var lib = new markoLibrary();
console.log(lib.checkPhoneNumber("210-555-4444"));