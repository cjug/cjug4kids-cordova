'use strict';

var turn = 'x';

var boxes = [
    '','','',
    '','','',
    '','',''
  ], 
  board_size  = 3,

  value_X     = 'x',
  value_O     = 'o',
  value_Blank = '',

  open_game = 'open',
  draw = 'draw',
  win_o  = value_O,
  win_x = value_X;
  
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
	if(sum == 'ooo')
	{
		results[0] = win_o;
	}
	else if(sum == 'xxx')
	{
		results[0] = win_x;
	}
	
}

function checkDraw(data) {
	var isDraw = true;
	for(var i = 0; i < 9; i++) {
		  if(data[i] == value_Blank)
		  {
			  isDraw = false;
		  }
	  }
	return isDraw;
}