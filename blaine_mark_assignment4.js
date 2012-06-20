// Project 4: My Library
// Mark A. Blaine
// SDI 1206

var markoLibrary = function(){
	
	// CHECK PHONE NUMBER FORMAT
	// Uses a regular expression to look for three digits followed by a dash, followed by another three digits, a dash and four more digits.  The first digit of the area code has to be a 2 or higher, since area codes do not start with 1 or 0.
	var checkPhoneNumber = function(number){
		var target = /^([2-9]?)([0-9]{2})[-]?([0-9]{3})[-]?([0-9]{4})$/;
		if (target.test(number)){
			return true;
		} else {
			return false;
		};
	};

	// CHECK EMAIL FORMAT
	// Uses a regular expression to look for any upper or lower case letters, number and dashes, periods or underscores with an "@" somewhere in the middle and ending with a top level domain of 2-4 letters.
	var checkEmailAddress = function(email){
		var target = /^[a-zA-Z0-9._-]+@[a-zA_Z0-9._-]+\.([a-zA_Z]{2,4})$/
		if (target.test(email)){
			return true;
		} else {
			return false;
		};
	};

	// RETURNS
	return {
		"checkPhoneNumber":checkPhoneNumber,
		"checkEmailAddress":checkEmailAddress
	};
};

var lib = new markoLibrary();
console.log("Phone number format? " + lib.checkPhoneNumber("210-555-4444"));
console.log("Email address format? " + lib.checkEmailAddress("mark@markblaine.com"));