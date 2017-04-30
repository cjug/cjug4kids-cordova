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
  
  checkSet(results, data[0], data[1], data[2]);
  checkSet(results, data[3], data[4], data[5]);
  checkSet(results, data[6], data[7], data[8]);
  
  checkSet(results, data[0], data[3], data[6]);
  checkSet(results, data[1], data[4], data[7]);
  checkSet(results, data[2], data[5], data[8]);
  
  checkSet(results, data[0], data[4], data[8]);
  checkSet(results, data[2], data[4], data[6]);
  
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

function checkSet(results, first, middle, last) {
	var sum = first + middle + last;
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