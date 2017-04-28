# Tic-Tac-Toe


## Start the app

## Unzip Folder tic-tac-toe.zip


## Open Directory

	cd tic-tac-toe


## Prepare Cordova App

	cordova prepare


## Try to Play

	cordova run android


## What's missing?

* Who's turn is it?  How do we win?


## Defining a Variable


	var turn = 'x';


## Running Tests

	cd www
	npm install
	npm test


## Functions 

	function toggleTurn(position) {
	
	}


## If Statements

	if() {
    	//if true
	}
	else {
		//if false
	}


## Change who's turn it is

	//if x's turn then o's turn next
	//if o's turn then x's turn next

	if(turn == 'x')
	{
      	turn = 'o';
	}
	else
	{
       turn = 'x';
	}


## Run test

	npm test


## Place the X or O

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


## Run test

	npm test


## Who Won?

### What does a tic tac toe to you and me

<table frame="box">
<tr>
<td>x</td>
<td>o</td>
<td>x</td>
</tr>
<tr>
<td>o</td>
<td>x</td>
<td>o</td>
</tr>
<tr>
<td>o</td>
<td>o</td>
<td>x</td>
</tr>
</table>


### What about a computer?

	['x', 'o', 'x', 'o', 'x', 'o', 'o', 'o', 'x']
	

### OR
	
	['x', 'o', 'x',
	 'o', 'x', 'o',
	 'o', 'o', 'x']


### Arrays

	var box = [];


### Setting Array values

	box[0] = 'x';


### Getting Array Values

	var value = box[0];


### What does winning look like to you

<table frame="box">
<tr>
<td>x</td>
<td>x</td>
<td>x</td>
</tr>
<tr>
<td>o</td>
<td>x</td>
<td>o</td>
</tr>
<tr>
<td>o</td>
<td>o</td>
<td>x</td>
</tr>
</table>


### What does it look like to the computer
	
	var box  = ['x', 'x', 'x', 'o', 'x', 'o', 'o', 'o', 'x'];

#### or 

	box[0]
	box[1]
	box[2]


### Putting Array values together

	// 'xxx'
	val result = box[0] + box[1] + box[2]


### 	