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
 
/*
 * 
 * Place the x or o and switch turns
 * 
 */
function toggleTurn(position) {
	// check if it's x's turn 

		//placeX in position
		
		//make o's turn

	//end if
	
	//else
	
		//placeO in position

		//make x's turn
	
	//end else
}
/*
 * 
 * Checks if there are 3 of the same value in first, middle and third
 * 
 */
function checkSet(data, results, first, middle, last) {
	// Add up the data elements for first, middle, and last

	//check if sum means o wins

		//push a result of o winning

	//end if
	
	//check else if sum means x wins

		//push a result of x winning

	//end if
	
}

function checkDraw(data) {
	//start by assuming there is a draw

	//loop over each element of data

		//check if any of them are empty

			  //if any are empty we do not have a draw yet

		  //end if

	//end loop
	
	//return result

}

/*
 * 
 * Check for a win
 * 
 */
function checkForWin(data) {
  //initialize empty results array
  
  //check horizontal rows

  //check vertical cols

  //check diagonals

  
  //check if we got any win results

	  //return the winning result

  //end if
  
  //check to see if we have a draw

	  //return the draw

  //end if
  
  //else we still play

	  //return open game

  //end else
};
