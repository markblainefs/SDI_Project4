// Project 4: My Library
// Mark A. Blaine
// SDI 1206

var markoLibrary = function(){
	
	// CHECK PHONE NUMBER FORMAT
	// Uses a regular expression to look for three digits followed by a dash, 
	// followed by another three digits, a dash and four more digits.  
	// The first digit of the area code has to be a 2 or higher, since 
	// area codes do not start with 1 or 0.
	var checkPhoneNumber = function(number){
		var target = /^[2-9][0-9]{2}-[0-9]{3}-[0-9]{4}$/;
		if (target.test(number)){
			return true;
		} else {
			return false;
		};
	};

	// CHECK EMAIL FORMAT
	// Uses a regular expression to look for any upper or lower case letters, 
	// number and dashes, periods or underscores with an "@" somewhere in the 
	// middle and ending with a top level domain of 2-4 letters.
	var checkEmailAddress = function(email){
		var target = /^[a-zA-Z0-9._-]+@[a-zA_Z0-9._-]+\.[a-zA_Z]{2,4}$/
		if (target.test(email)){
			return true;
		} else {
			return false;
		};
	};

	// CHECK URL FORMAT
	// Uses a regular expression to look first for http, or ftp with an optional "s" 
	// at the end, then checks for upper and lower case letters with optional 
	// underscores, dashes and periods, ending with a period and 2-4 letters.
	var checkURL = function(url){
		var target = /^((ht|f)tps?:\/\/)?[a-zA-Z0-9-_\.]+\.[a-zA-Z]{2,4}$/;

		if (target.test(url)){
			return true;
		} else {
			return false;
		};
	};

	// APPLY PROPER FORMAT TO STRING
	// First splits the string into words anywhere there is a space.  
	// Then capitalizes the first letter and uses lower case for the rest of the
	// letters.  Then returns the joined string with inserted spaces.
	var properCase = function(string) {
    	var format = string.split(/\s/);
    	for(var i=0,l=format.length; i<l; i++) {
        	format[i] = format[i].substr(0,1).toUpperCase() + 
                 (format[i].length > 1 ? format[i].substr(1).toLowerCase() : "");
        };
        return format.join(" ");
    };
    
	// SPLIT A STRING WITH A SEPARATOR AND COMBINE WITH ANOTHER SEPARATOR
	// First splits the string anywhere there is a give separator.  
	// Then removes the previous separator and recombines with another separator
	var splitString = function(string,oldSep,newSep) {
    	var temp = string.split(oldSep);
        return temp.join(newSep);
    };

    // CALCULATE THE DIFFERENCE BETWEEN TWO DATES
    // Converts the dates from (YYYY,MM,DD) and subtracts them to determine
    // the number of days that have passed.
    var calcDateDiff = function(date1,date2){
	    var newDate1 = new Date(date1);
	    var newDate2 = new Date(date2);
	    var difference = newDate2-newDate1;
	    return difference;
    };
    
	// RETURNS
	return {
		"checkPhoneNumber":checkPhoneNumber,
		"checkEmailAddress":checkEmailAddress,
		"checkURL":checkURL,
		"properCase":properCase,
		"splitString":splitString,
		"calcDateDiff":calcDateDiff
	};
};

var lib = new markoLibrary();

console.log("Phone number format? " + lib.checkPhoneNumber("210-555-4444"));
console.log("Email address format? " + lib.checkEmailAddress("mark@markblaine.com"));
console.log("URL format? " + lib.checkURL("www.google.com"));
console.log("Proper case is " + lib.properCase("mark blaine"));
console.log("Split and combine: " + lib.splitString("a,b,c",",","/"));
console.log("Days that have passed: " + lib.calcDateDiff((2000, 5, 20),(2000, 5, 27)));
