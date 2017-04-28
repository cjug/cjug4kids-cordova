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
		boxes[0] = 'x';
		var result = checkForWin(boxes);
		expect(result).toEqual(open_game);
	});
	
	it("x row 1 across", function () {
		boxes[0] = 'x';
		boxes[1] = 'x';
		boxes[2] = 'x';
		var result = checkForWin(boxes);
		expect(result).toEqual(win_x);
	});
	
	it("o row 1 across", function () {
		boxes[0] = 'o';
		boxes[1] = 'o';
		boxes[2] = 'o';
		var result = checkForWin(boxes);
		expect(result).toEqual(win_o);
	});
	
	it("x row 2 across", function () {
		boxes[3] = 'x';
		boxes[4] = 'x';
		boxes[5] = 'x';
		var result = checkForWin(boxes);
		expect(result).toEqual(win_x);
	});
	
	it("o row 2 across", function () {
		boxes[3] = 'o';
		boxes[4] = 'o';
		boxes[5] = 'o';
		var result = checkForWin(boxes);
		expect(result).toEqual(win_o);
	});
	
	it("x row 3 across", function () {
		boxes[6] = 'x';
		boxes[7] = 'x';
		boxes[8] = 'x';
		var result = checkForWin(boxes);
		expect(result).toEqual(win_x);
	});
	
	it("o row 3 across", function () {
		boxes[6] = 'o';
		boxes[7] = 'o';
		boxes[8] = 'o';
		var result = checkForWin(boxes);
		expect(result).toEqual(win_o);
	});
	
	it("x col 1 down", function () {
		boxes[0] = 'x';
		boxes[3] = 'x';
		boxes[6] = 'x';
		var result = checkForWin(boxes);
		expect(result).toEqual(win_x);
	});
	
	it("o col 1 down", function () {
		boxes[0] = 'o';
		boxes[3] = 'o';
		boxes[6] = 'o';
		var result = checkForWin(boxes);
		expect(result).toEqual(win_o);
	});
	
	it("x col 2 down", function () {
		boxes[1] = 'x';
		boxes[4] = 'x';
		boxes[7] = 'x';
		var result = checkForWin(boxes);
		expect(result).toEqual(win_x);
	});
	
	it("o col 2 down", function () {
		boxes[1] = 'o';
		boxes[4] = 'o';
		boxes[7] = 'o';
		var result = checkForWin(boxes);
		expect(result).toEqual(win_o);
	});
	
	it("x col 3 down", function () {
		boxes[2] = 'x';
		boxes[5] = 'x';
		boxes[8] = 'x';
		var result = checkForWin(boxes);
		expect(result).toEqual(win_x);
	});
	
	it("o col 3 down", function () {
		boxes[2] = 'o';
		boxes[5] = 'o';
		boxes[8] = 'o';
		var result = checkForWin(boxes);
		expect(result).toEqual(win_o);
	});
	
	it("x diag from 0 to 8", function () {
		boxes[0] = 'x';
		boxes[4] = 'x';
		boxes[8] = 'x';
		var result = checkForWin(boxes);
		expect(result).toEqual(win_x);
	});
	
	it("o diag from 0 to 8", function () {
		boxes[0] = 'o';
		boxes[4] = 'o';
		boxes[8] = 'o';
		var result = checkForWin(boxes);
		expect(result).toEqual(win_o);
	});
	
	it("x diag from 6 to 2", function () {
		boxes[2] = 'x';
		boxes[4] = 'x';
		boxes[6] = 'x';
		var result = checkForWin(boxes);
		expect(result).toEqual(win_x);
	});
	
	it("o diag from 6 to 2", function () {
		boxes[2] = 'o';
		boxes[4] = 'o';
		boxes[6] = 'o';
		var result = checkForWin(boxes);
		expect(result).toEqual(win_o);
	});
	
	it("draw", function () {
		boxes = [
		    'o','x','o',
		    'x','o','o',
		    'x','o','x'
		  ];
		var result = checkForWin(boxes);
		expect(result).toEqual(draw);
	});
	
	it("still open ", function () {
		boxes = [
		    'o','x','o',
		    'x','','o',
		    'x','o','x'
		  ];
		var result = checkForWin(boxes);
		expect(result).toEqual(open_game);
	});
	
	it("check set x wins", function() {
		var set = ['x', 'x', 'x'];
		var results = [];
		checkSet(set, results, 0, 1, 2);
		expect(results[0]).toEqual(win_x);
	});
	
	it("check set o wins", function() {
		var set = ['o', 'o', 'o'];
		var results = [];
		checkSet(set, results, 0, 1, 2);
		expect(results[0]).toEqual(win_o);
	});
	
	it("check set open", function() {
		var set = ['o', '', 'o'];
		var results = [];
		checkSet(set, results, 0, 1, 2);
		expect(results.length).toEqual(0);
	});
	
	
	
});