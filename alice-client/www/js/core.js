window.aliceClient = {};

aliceClient.createPersonInput = function(type) {
	var result = {};
	result.type = type;
	return result;
}

aliceClient.createPersonSayInput = function(message) {
	var result = {};
	result.message = message;
	return result;
}

aliceClient.createMoveInput = function(direction) {
	var result = {};
	result.direction = direction;
	return result;
}

aliceClient.processPersonResponse = function(response) {
	response.data = JSON.parse(response.data);
	window.localStorage.setItem("personId", response.data.userId);
}

aliceClient.createPerson = function(type) {
	cordovaHTTP.post(aliceClient.serverHost + "/games/alice/person", 
			aliceClient.createPersonInput(type),
			{}, aliceClient.processPersonResponse, function(response) {
			response.error = JSON.parse(response.error);
			alert("Error: " + response.error.error);
		});
}

aliceClient.personSay = function(message) {
	var personIdValue = window.localStorage.getItem("personId");
	cordovaHTTP.post(aliceClient.serverHost + "/games/alice/person/say", 
			aliceClient.createPersonSayInput(message),
			{"personId": personIdValue}, aliceClient.processPersonResponse, function(response) {
			response.error = JSON.parse(response.error);
			document.getElementById("message").innerHTML = "Error: " + response.error.error;
		});
}

aliceClient.personJump = function() {
	var personIdValue = window.localStorage.getItem("personId");
	cordovaHTTP.post(aliceClient.serverHost + "/games/alice/person/jump", 
			{},
			{"personId": personIdValue}, null, function(response) {
			response.error = JSON.parse(response.error);
			alert("Error: " + response.error.error);
		});
}

aliceClient.personMove = function(direction) {
	var personIdValue = window.localStorage.getItem("personId");
	cordovaHTTP.post(aliceClient.serverHost + "/games/alice/person/move", 
			aliceClient.createMoveInput(direction),
			{"personId": personIdValue}, null, function(response) {
			response.error = JSON.parse(response.error);
			alert(response.error.error);
		});
}

aliceClient.personTurn = function() {
	var personIdValue = window.localStorage.getItem("personId");
	cordovaHTTP.post(aliceClient.serverHost + "/games/alice/person/turn", 
			aliceClient.createMoveInput(),
			{"personId": personIdValue}, null, function(response) {
			response.error = JSON.parse(response.error);
			alert("Error: " + response.error.error);
		});
}