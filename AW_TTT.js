// AW_TTT.js


// var x = document.getElementById("myTable");

console.log("Are we reaching the js??");

setInterval(function(){
	
	var da = new Date();
	
	if(da.getHours() > 12){
	document.getElementById("hours").innerHTML = da.getHours() - 12;
	} else 
	document.getElementById("hours").innerHTML = da.getHours();

	document.getElementById("seconds").innerHTML = da.getSeconds();
	document.getElementById("minutes").innerHTML = da.getMinutes();
	document.getElementById("milliseconds").innerHTML = da.getMilliseconds();

	var minutes = da.getMinutes();

	if(minutes % 2 === 0){
		document.body.style.backgroundColor = "#6495ED"
	} else {
		document.body.style.backgroundColor = "pink"
	}

}, 1000);


function startGame(){

	document.turn = "X";

	// if(Math.random() < 0.5){
	// 	document.turn = "O";
	// }

	document.winner = null;

	setMessage(document.turn + " is starting.");
}

function setMessage(message){
	document.getElementById("turn").innerText = message;
}


function nextMove(boardBox){
	if(document.winner != null){
		setMessage("The game has already been won by" + document.winner +"!");
	} else if(boardBox.innerText == ""){
		boardBox.innerText = document.turn;
		switchTurn();
	} else {
		setMessage("That spot is already taken! Try again.")
	}
	// square.innerHTML;
}

function switchTurn(){

	if(checkForWinner(document.turn)){
		setMessage("Congratulations, " + document.turn + "! You're the winner!");
		document.winner = document.turn;
	} else if(document.turn == "X"){
		document.turn = "O";
		setMessage ("It's " + document.turn + "'s turn!");
	} else {
		document.turn = "X";
		setMessage ("It's " + document.turn + "'s turn!");
	}
}


//checkWinner
function checkRow(a, b, c, move){
	var result = false;
	if (getBox(a) == move && getBox(b) == move && getBox(c) == move){
		result = true;
	}
	return result;
}


function getBox(number){
	return document.getElementById("box"+number).innerText;
}


function checkForWinner(move){
	var result = false;

	if(checkRow(1, 2, 3, move) ||
		checkRow(4, 5, 6, move) ||
		checkRow(7, 8, 9, move) ||
		checkRow(1, 4, 7, move) ||
		checkRow(2, 5, 8, move) ||
		checkRow(3, 6, 9, move) ||
		checkRow(1, 5, 9, move) ||
		checkRow(3, 5, 7, move)){

		result = true;
	} 
	return result;
}

function clearBox(number){
	document.getElementById("box"+number).innerText = " ";
}

function clearBoard(){
	for (var i=1; i <=9 ; i++){
		clearBox(i);
	}

	console.log ("Are we clearing the board?");
}

// function endGame(){
// 	if(checkForWinner() == true){

// 	}
// }


// svar x = document.createElement("TABLE");
// var box = document.getElementById("box1");

// box.addEventListener("click", function canvasClicked {
// 	console.log("It was Clicked!");
// 	alert("THE ALERT WAS CLICKED, NOT CLOCKED, STUPID");

// });


// function canvasClicked {
// 	console.log(" It was Clicked! ");
// 	alert(" THE ALERT WAS CLICKED, NOT CLOCKED, STUPID");

// }

// function canvasClicked (box){
// 	console.log(" It was Clicked! ");
// 	alert(" THE ALERT WAS CLICKED, NOT CLOCKED, STUPID");

// }

// td.addEventListener("mouseover", function canvasClicked {
// 	console.log(" It was Clicked! ");
// 	alert(" THE ALERT WAS CLICKED, NOT CLOCKED, STUPID");

// });



// var a =1 ;

// function dosomething(){
// if(a=1){
//    document.getElementById('').innerHTML='x';
// }else{
//    document.getElementById('').innerHTML='O';
// }
// a=0;
// }
