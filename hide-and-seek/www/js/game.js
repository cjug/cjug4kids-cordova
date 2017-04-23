hideandseek.serverHost = "http://192.168.1.2:8890";


/*
 * Copy values from form to register a new player
 * 
 */
hideandseek.mapInputFromReg = function() {
	//Create an object
	
	//read in the playerName value
	
	//read in the team value
	
	//create the position object
	
	//read in the row value
	
	//read in the col value
	
	//return the object
}

/
hideandseek.mapInputFromCheck = function() {
	//create an object

	//read in the row to check
	
	//read in the col to check
	
	//return the object
	
	
}

hideandseek.checkSpotByRow = function(){
	//create an object

	//read the row to check

	//loop from col 1 to 10 

		//convert integer to string

		//check spot
	//end loop
}

hideandseek.processPlayerRegistration = function(response) {
	
	try {
		response.data = JSON.parse(response.data);
		// prints test
		//console.log(JSON.stringify(response.data));
		document.getElementById("message").innerHTML = "User Registered with id " + response.data.id;
		window.localStorage.setItem("playerId", response.data.id);
		hideandseek.redirectTo("check.html");
	} catch(e) {
		console.error("JSON parsing error");
		console.log(response.data);
	}
}

hideandseek.processCheck = function(response) {
	// prints 200
	console.log(response.status);
	
	try {
		response.data = JSON.parse(response.data);
		document.getElementById("message").innerHTML = response.data.message;
		window.location = "check.html";
	} catch(e) {
		console.error("JSON parsing error");
		console.log(response.data);
	}
}

hideandseek.checkSpot = function(position) {
	var playerIdValue = window.localStorage.getItem("playerId");
	cordovaHTTP.post(hideandseek.serverHost + "/games/hide-and-seek/check", position
			, {playerId: playerIdValue}, 
			hideandseek.processCheck
			, function(response) {
			// prints 403
			console.log(response.status);
			
			//prints Permission denied
			console.log(response.error);
			response.error = JSON.parse(response.error);
			document.getElementById("message").innerHTML = "Error: " + response.error.error;
		});
}

hideandseek.checkSpotButtonAction = function() {
	hideandseek.checkSpot(hideandseek.mapInputFromCheck());
}

hideandseek.registerPlayer = function() {
	cordovaHTTP.post(hideandseek.serverHost + "/games/hide-and-seek/register", 
			hideandseek.mapInputFromReg(),
			{}, hideandseek.processPlayerRegistration, function(response) {
			// prints 403
			console.log(response.status);
			
			//prints Permission denied
			console.log(response.error);
			response.error = JSON.parse(response.error);
			document.getElementById("message").innerHTML = "Error: " + response.error.error;
		});
}

hideandseek.initRegPage = function() {
	document.getElementById("register").onclick = hideandseek.registerPlayer;
}


hideandseek.initCheckPage = function(){
	document.getElementById("check").onclick = hideandseek.checkSpotButtonAction;
	document.getElementById("checkRow").onclick = hideandseek.checkSpotByRow;
}
