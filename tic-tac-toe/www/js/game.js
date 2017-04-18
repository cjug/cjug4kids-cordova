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
  // No blanks? we are draw
  if (data.every(function(d){return d !== value_Blank})) {
    return draw;
  }

  var results = [];
  //rows
  results[0] = data[0] + data[1] + data[2];
  results[1] = data[3] + data[4] + data[5];
  results[2] = data[6] + data[7] + data[8];
  //colums
  results[3] = data[0] + data[3] + data[6];
  results[4] = data[1] + data[4] + data[7];
  results[5] = data[2] + data[5] + data[8];
  //diagonal lines
  results[6] = data[0] + data[4] + data[8];
  results[7] = data[2] + data[4] + data[6];

  if (results.some(function(result){return result === win_o})) {
    return win_o;
  }

  if (results.some(function(result){return result === win_x})) {
    return win_x;
  }
  var isDraw = true;
  for(var i = 0; i < 9; i++) {
	  if(data[i] != 0)
	  {
		  isDraw = false;
	  }
  }
  
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