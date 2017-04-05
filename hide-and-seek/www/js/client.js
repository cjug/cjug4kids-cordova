var test = function(input) {
	return "Test";
}
document.getElementById("register").onclick = function() {
	cordovaHTTP.post("http://10.0.2.2:8890/games/hide-and-seek/register", {
			"name": document.getElementById("playerName").value,
			"team": document.getElementById("team").value,
			"pos": {
				"row": document.getElementById("row").value,
				"col": document.getElementById("col").value
			}
		}, {}, function(response) {
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
		}, function(response) {
			// prints 403
			console.log(response.status);
			
			//prints Permission denied
			console.log(response.error);
			response.error = JSON.parse(response.error);
			document.getElementById("message").innerHTML = "Error: " + response.error.error;
		});
}

