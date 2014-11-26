var roman_map = {
	'M':	1000,
	'CM':	900,
	'D':	500,
	'CD':	400,
	'C':	100,
	'XC':	90,
	'L':	50,
	'XL':	40,
	'X':	10,
	'IX':	9,
	'V':	5,
	'IV':	4,
	'I':	1
};


exports.to_roman_numerals = function(num) {

	var n = parseInt(num, 10);
	var res = '';

	for (var roman in roman_map) {
		var number = roman_map[roman];
		var matches = parseInt(n / number, 10);
		for (var i = 0; i < matches; i++) {
			res += roman;
		}
		n = n % number;
	}

	return res;
};

