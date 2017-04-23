window.aliceClient = {};

aliceClient.serverHost = "http://192.168.1.2:8283"
/*
 * 
 * Create a new person
 * 
 */
aliceClient.createPersonInput = function(type) {
	
}

/*
 * 
 * Have the person say something
 * 
 */
aliceClient.createPersonSayInput = function(message) {
	
}

/*
 * 
 * Create an input to move
 * 
 */
aliceClient.createMoveInput = function(direction) {
	
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
			{"personId": personIdValue}, null, function(response) {
			response.error = JSON.parse(response.error);
			alert("Error: " + response.error.error);
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

aliceClient.personTurn = function(direction) {
	var personIdValue = window.localStorage.getItem("personId");
	cordovaHTTP.post(aliceClient.serverHost + "/games/alice/person/turn", 
			aliceClient.createMoveInput(direction),
			{"personId": personIdValue}, null, function(response) {
			response.error = JSON.parse(response.error);
			alert("Error: " + response.error.error);
		});
}