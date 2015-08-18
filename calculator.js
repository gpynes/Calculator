var subBttn = document.getElementsByClassName( "enter" );
var inText = document.getElementsByTagName( "input" );

var p = function( word ) {
	console.log( word );
};


var maths =0;

function getText() {
	console.log( "This works" );
	return inText.input.value;
}

subBttn.onClick = function() {
	console.log( "This")
};

subBttn[ 0 ].addEventListener( "click", console.log("stuff"));