describe("toggleTurn", function () {
	
	beforeEach(function() {
		window.placeX = {};
		window.placeO = {};
    	spyOn(window, 'placeX');
    	spyOn(window, 'placeO');
	});
	
	it("initial turn is x", function () {
		expect(turn).toEqual('x');
	});
	
	it("next turn is o", function() {
		toggleTurn(1);
		expect(turn).toEqual('o');
		expect(window.placeX).toHaveBeenCalled();
	});
	
	it("next turn after the next is x", function() {
		toggleTurn(1);
		expect(turn).toEqual('x');
		expect(window.placeO).toHaveBeenCalled();
	});
	
});