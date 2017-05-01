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

	clearBoard();

	var computerPlayer;
	var player2;
	var player1 = prompt("Player 1, Do you choose X or O ? Choose wisely, it IS case-sensitive.", "Player 1");
	while(player1 == null || player1 == "" || player1 != "O" || player1 != "X"){

		if(player1 == null || player1 == ""){
			var player1 = prompt("Player 1, you have not chosen your letter of choice. Do you choose X or O ?", "Player 1");
			console.log("Player ain't choosinf=g anything");

		} else if (player1 == "O" || player1 == "X"){
			gameText("Player 1, you have chosen "+ player1);
			break;

		} else {
			gameText("You may only choose between X and O");
			console.log("Player 1 chose "+ player1);
			var player1 = prompt("Player 1, You may ONLY choose between X and O. Do you choose X or O ?", "Player 1")	
		}
	}//while
	

	if(player1 == "O"){
		player2 = "X";
		computerPlayer = "X";
		gameTextLine2("Player 2, you have chosen " + player2);
	} else {
		player2 = "O";
		computerPlayer = "O";
		gameTextLine2("Player 2, you have chosen " + player2);
	}


	console.log("player 1 is: "+ player1+ " and player 2 is: "+ player2);
	document.turn = player1;

	// if(Math.random() < 0.5){
	// 	document.turn = player2;
	// } // 50% of the time player 2 will go. 

	document.winner = null;
	setMessage(document.turn + " is starting.");
}

function gameText(text){
	document.getElementById("text").innerText = text;
}

function gameTextLine2(text){
	document.getElementById("text2").innerText = text;
}

function setMessage(message){
	document.getElementById("turn1").innerText = message;
}


function nextMove(boardBox){
	if(document.winner != null){
		setMessage("The game has already been won by " + document.winner +"!");
	} else if(boardBox.innerText == ""){
		boardBox.innerText = document.turn;
		switchTurn();
	} else {
		setMessage1("That spot is already taken! Try again.")
	}
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

	if(checkRow(1, 2, 3, move) || checkRow(4, 5, 6, move) || checkRow(7, 8, 9, move) || checkRow(1, 4, 7, move) || checkRow(2, 5, 8, move) || checkRow(3, 6, 9, move) || checkRow(1, 5, 9, move) || checkRow(3, 5, 7, move)){
		result = true;
	} 
	return result;
}

function clearBox(number){
	document.getElementById("box"+number).innerText = "";
	// getBox(number) = "";
}

function clearBoard(){
	for (var i=1; i <=9 ; i++){
		clearBox(i);
	}
	gameText("");
	setMessage("");

	console.log ("Are we clearing the board?");

}

function changeColor(colorName){
	backgroundColor = colorName;
}

function endGame(){
	var endGame = false;
	for(var i=1; i<=9; i++){
		if(getBox(i) != ""){
			endGame = true;
		}
	}
	gameText("No more playable moves! Game over!");
	return endGame;
}


