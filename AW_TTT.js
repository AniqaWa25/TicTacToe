// AW_TTT.js

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
		document.body.style.backgroundColor = "#b3b3ff"
	} else {
		document.body.style.backgroundColor = "#9999ff"
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
		gameTextLine2("Player 2, you have been given " + player2);
	} else {
		player2 = "O";
		computerPlayer = "O";
		gameTextLine2("Player 2, you have been given " + player2);
	}

	// console.log("player 1 is: "+ player1+ " and player 2 is: "+ player2);
	document.turn = player1;
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
		setMessage("The game has already been won by " + document.winner +"! Would you like to restart?");
	} else if(boardBox.innerText == ""){
		boardBox.innerText = document.turn;
		// hoverColor();
		switchTurn();
	} else {
		if(endGame()){
			setMessage("No more playable moves! Game over! Would you like to restart?");
		} else{
			setMessage("That spot is already taken! Try again.")
		}
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
}

function clearBoard(){
	for (var i=1; i <=9 ; i++){
		clearBox(i);
	}
	gameText("");
	setMessage("");
}

function hoverColor(number){
	if(document.turn == "X"){
		document.getElementById("box"+number).style.backgroundColor = "#ffff99";
	} else {
		document.getElementById("box"+number).style.backgroundColor = "#ccffcc";
	}
}

function endGame(){
	var endGame = false;
	var count = 0;

	for(var i=1; i<=9; i++){
		if(getBox(i) != ""){
			count++;
			if(count == 9){
				endGame = true;
			}
		}
	}
	return endGame;
}


