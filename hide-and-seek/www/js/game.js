hideandseek.serverHost = "http://10.0.2.2:8890";

hideandseek.mapInputFromCheck = function() {
	var result = {};
	
	result.row = document.getElementById("row").value;
	result.col = document.getElementById("col").value;
	
	return result;
	
}

hideandseek.mapInputFromReg = function() {
	var result = {};
	
	result.name = document.getElementById("playerName").value;
	result.team = document.getElementById("team").value;
	result.pos = {};
	result.pos.row = document.getElementById("row").value;
	result.pos.col = document.getElementById("col").value;
	
	return result;
}

hideandseek.processPlayerRegistration = function(response) {
	// prints 200
	console.log(response.status);
	
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
		// prints test
		//console.log(JSON.stringify(response.data));
		document.getElementById("message").innerHTML = "User Registered with id " + response.data.id;
		window.localStorage.setItem("playerId", response.data.id);
		window.location = "check.html";
	} catch(e) {
		console.error("JSON parsing error");
		console.log(response.data);
	}
}

hideandseek.checkSpot = function() {
	var playerIdValue = window.localStorage.getItem("playerId");
	cordovaHTTP.post(hideandseek.serverHost + "/games/hide-and-seek/check", hideandseek.mapInputFromCheck()
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

hideandseek.registerPlayer = function() {
	cordovaHTTP.post(hideandseek.serverHost + "/games/hide-and-seek/register", 
			hideandseek.mapInputFromReg(),
			{}, hideandseek.proccessPlayerRegistration, function(response) {
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
	document.getElementById("check").onclick = hideandseek.checkSpot;
}
