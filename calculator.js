var subBttn = document.querySelectorAll( ".enter" );
var inText = document.getElementsByTagName( "input" );
var numbers = document.querySelectorAll( ".nums" );
var currentNumber = 0;
var keys = {
	0 : 1,
	1 : 2,
	2 : 3,
	3 : 4,
	4 : 5,
	5 : 6,
	6 : 7,
	7 : 8,
	8 : 9,
	9 : 0
}



var p = function( word ) {
	console.log( word );
};


//Retrieves text from input box for use as string.
function getText() {
	console.log(inText.input.value );
}


for ( var i = 0; i < numbers.length; i++ ) {
	numbers[ i ].addEventListener( "click", (function(i) {
        return function() { 
            console.log(i); 
        }; 
    } ) ( i ) );
}

for ( var i = 0; i < subBttn.length; i++ ) {
	subBttn[ i ].addEventListener( "click", (function(i) {
		return function() {
			getText();
		}
	} ) ( i ) );
}
