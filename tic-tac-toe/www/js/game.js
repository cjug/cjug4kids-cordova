'use strict';

var turn = 'x';

var boxes = [
    0,0,0,
    0,0,0,
    0,0,0
  ], 
  board_size  = 3,

  value_X     = -1,
  value_O     = 1,
  value_Blank = 0,

  open_game = -2,
  draw = board_size * value_Blank,
  win_o  = board_size * value_O,
  win_x = board_size * value_X;
  
function toggleTurn(position) {
	if(turn == 'x')
	{
		placeX(position);
		turn = 'o';
	}
	else
	{
		placeO(position);
		turn = 'x';
	}
}

function checkForWin(data) {
  
  var results = [];
  
  checkSet(data, results, 0,1,2);
  checkSet(data, results, 3,4,5);
  checkSet(data, results, 6,7,8);
  
  checkSet(data, results, 0,3,6);
  checkSet(data, results, 1,4,7);
  checkSet(data, results, 2,5,8);
  
  checkSet(data, results, 0,4,8);
  checkSet(data, results, 2,4,6);
  
  if(results[0])
  {
	  return results[0];
  }
  
  var isDraw = checkDraw(data);
  
  
  if(isDraw)
  {
	  return draw;
  }
  else
  {
	  // There are still more moves can be made.
	  return open_game;
  }
};

function checkSet(data, results, first, middle, last) {
	var sum = data[first] + data[middle] + data[last];
	if(sum == 3)
	{
		results.push(win_o);
	}
	else if(sum == -3)
	{
		results.push(win_x)
	}
	
}

function checkDraw(data) {
	var isDraw = true;
	for(var i = 0; i < 9; i++) {
		  if(data[i] == 0)
		  {
			  isDraw = false;
		  }
	  }
	return isDraw;
}