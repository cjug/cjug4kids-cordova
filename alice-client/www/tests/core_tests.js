describe("aliceClientCore", function () {
	
	beforeEach(function() {
		
	});
	
	it("create person", function () {
		var result = aliceClient.createPersonInput("Odin");
		expect(result).toEqual({"type": "Odin"});
	});
	
	it("person say", function () {
		var result = aliceClient.createPersonSayInput("Hi");
		expect(result).toEqual({"message": "Hi"});
	});
	
	it("person move", function () {
		var result = aliceClient.createMoveInput("up");
		expect(result).toEqual({"direction":"up"});
	});
	
	it("process person response", function () {
		var result = aliceClient.processPersonResponse({"data":'{"userId": "123"}'});
		var personIdValue = window.localStorage.getItem("personId");
		expect(personIdValue).toEqual("123");
	});
});