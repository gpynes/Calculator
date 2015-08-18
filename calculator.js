var subBttn = document.querySelectorAll( ".enter" );
var inText = document.getElementsByTagName( "input" );
var numbers = document.querySelectorAll( ".nums" );
var currentNumber = 0;
var keys = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ];



var p = function( word ) {
	console.log( word );
};


//Retrieves text from input box for use as string.
function getText() {
	console.log(inText.input.value );
	currentNumber = parseInt( inText.input.value );
}

//Adds button values to input box text
function addInput( i ) {
	inText.input.value += keys[ i ];
}

function clearInput() {
	inText.input.value = null;
}

for ( var i = 0; i < numbers.length; i++ ) {
	numbers[ i ].addEventListener( "click", (function(i) {
        return function() { 
            console.log(i); 
            addInput( i );
        }; 
    } ) ( i ) );
}

for ( var i = 0; i < subBttn.length; i++ ) {
	subBttn[ i ].addEventListener( "click", (function(i) {
		return function() {
			getText();
			clearInput();
		}
	} ) ( i ) );
}
