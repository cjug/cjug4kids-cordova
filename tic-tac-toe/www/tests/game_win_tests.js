describe("checkForWin", function () {
	
	beforeEach(function() {
		boxes = [
		    0,0,0,
		    0,0,0,
		    0,0,0
		  ];
    	spyOn(window, 'placeX');
    	spyOn(window, 'placeO');
	});
	
	it("initially board should not have win or lose", function () {
		boxes[0] = -1;
		var result = checkForWin(boxes);
		expect(result).toEqual(open_game);
	});
	
	it("x row 1 across", function () {
		boxes[0] = -1;
		boxes[1] = -1;
		boxes[2] = -1;
		var result = checkForWin(boxes);
		expect(result).toEqual(win_x);
	});
	
	it("y row 1 across", function () {
		boxes[0] = 1;
		boxes[1] = 1;
		boxes[2] = 1;
		var result = checkForWin(boxes);
		expect(result).toEqual(win_o);
	});
	
	it("x row 2 across", function () {
		boxes[3] = -1;
		boxes[4] = -1;
		boxes[5] = -1;
		var result = checkForWin(boxes);
		expect(result).toEqual(win_x);
	});
	
	it("y row 2 across", function () {
		boxes[3] = 1;
		boxes[4] = 1;
		boxes[5] = 1;
		var result = checkForWin(boxes);
		expect(result).toEqual(win_o);
	});
	
	it("x row 3 across", function () {
		boxes[6] = -1;
		boxes[7] = -1;
		boxes[8] = -1;
		var result = checkForWin(boxes);
		expect(result).toEqual(win_x);
	});
	
	it("y row 3 across", function () {
		boxes[6] = 1;
		boxes[7] = 1;
		boxes[8] = 1;
		var result = checkForWin(boxes);
		expect(result).toEqual(win_o);
	});
	
	it("x col 1 down", function () {
		boxes[0] = -1;
		boxes[3] = -1;
		boxes[6] = -1;
		var result = checkForWin(boxes);
		expect(result).toEqual(win_x);
	});
	
	it("y col 1 down", function () {
		boxes[0] = 1;
		boxes[3] = 1;
		boxes[6] = 1;
		var result = checkForWin(boxes);
		expect(result).toEqual(win_o);
	});
	
	it("x col 2 down", function () {
		boxes[1] = -1;
		boxes[4] = -1;
		boxes[7] = -1;
		var result = checkForWin(boxes);
		expect(result).toEqual(win_x);
	});
	
	it("y col 2 down", function () {
		boxes[1] = 1;
		boxes[4] = 1;
		boxes[7] = 1;
		var result = checkForWin(boxes);
		expect(result).toEqual(win_o);
	});
	
	it("x col 3 down", function () {
		boxes[2] = -1;
		boxes[5] = -1;
		boxes[8] = -1;
		var result = checkForWin(boxes);
		expect(result).toEqual(win_x);
	});
	
	it("y col 3 down", function () {
		boxes[2] = 1;
		boxes[5] = 1;
		boxes[8] = 1;
		var result = checkForWin(boxes);
		expect(result).toEqual(win_o);
	});
	
	it("x diag from 0 to 8", function () {
		boxes[0] = -1;
		boxes[4] = -1;
		boxes[8] = -1;
		var result = checkForWin(boxes);
		expect(result).toEqual(win_x);
	});
	
	it("y diag from 0 to 8", function () {
		boxes[0] = 1;
		boxes[4] = 1;
		boxes[8] = 1;
		var result = checkForWin(boxes);
		expect(result).toEqual(win_o);
	});
	
	it("x diag from 6 to 2", function () {
		boxes[2] = -1;
		boxes[4] = -1;
		boxes[6] = -1;
		var result = checkForWin(boxes);
		expect(result).toEqual(win_x);
	});
	
	it("y diag from 6 to 2", function () {
		boxes[2] = 1;
		boxes[4] = 1;
		boxes[6] = 1;
		var result = checkForWin(boxes);
		expect(result).toEqual(win_o);
	});
	
	it("draw", function () {
		boxes = [
		    1,-1,1,
		    -1,1,1,
		    -1,1,-1
		  ];
		var result = checkForWin(boxes);
		expect(result).toEqual(draw);
	});
	
	it("still open ", function () {
		boxes = [
		    1,-1,1,
		    -1,0,1,
		    -1,1,-1
		  ];
		var result = checkForWin(boxes);
		expect(result).toEqual(open_game);
	});
	
});