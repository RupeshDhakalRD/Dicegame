


myfunction =()=>{
	const player1_random_num = Math.floor(Math.random() * 6) + 1;
	const player2_random_num = Math.floor(Math.random() * 6) + 1;
	const start_btn = document.querySelector('.start_btn');
	const winner = document.querySelector('.winner_pick');
	const player_1 = document.querySelector('.player-1-dice');
	const player_2 = document.querySelector('.player-2-dice'); 
	
	// player_1 function
	switch(player1_random_num){
		case 1:
			player_1.src = "images/dice-1.png";
	}
	switch(player1_random_num){
		case 2:
			player_1.src = "images/dice-2.png";
	}
	switch(player1_random_num){
		case 3:
			player_1.src = "images/dice-3.png";
	}
	switch(player1_random_num){
		case 4:
			player_1.src = "images/dice-4.png";
	}
	switch(player1_random_num){
		case 5:
			player_1.src = "images/dice-5.png";
	}
	switch(player1_random_num){
		case 6:
			player_6.src = "images/dice-6.png";	
	}
	// player_2 function
	switch(player2_random_num){
		case 1:
			player_2.src = "images/dice-1.png";
	}
	switch(player2_random_num){
		case 2:
			player_2.src = "images/dice-2.png";
	}
	switch(player2_random_num){
		case 3:
			player_2.src = "images/dice-3.png";
	}
	switch(player2_random_num){
		case 4:
			player_2.src = "images/dice-4.png";
	}
	switch(player2_random_num){
		case 5:
			player_2.src = "images/dice-5.png";
	}
	switch(player2_random_num){
		case 6:
			player_2.src = "images/dice-6.png";
	}
	// condition check
	// if player-1 won
	if(player1_random_num > player2_random_num ){
		winner.innerHTML = "Player-1 Won";
	}
	// if player-2 won
	else if(player1_random_num < player2_random_num){
		winner.innerHTML = "Player-2 Won";
	}
	// if draw
	else{
		winner.innerHTML = "Match Draw";
	}
	}