# Hide and Seek


## How do we play Hide and Seek


## Hide and Seek on a Grid


## But what if we all want to play?


## What is a Server?


## What is an API?


## Calling APIs


## How do we get input?


## Creating a form - Text Input

	<input id="playerName" name="playerName" type="text" >


## Creating a form - Label

	<label for="playerName">Name</label>
	<input id="playerName" name="playerName" type="text" >


## Creating a form - Dropdowns

	<select id="team" name="team">
		<option value="team1">Team 1</option>
		<option value="team2">Team 2</option>
	</select>


## Creating a form - Row Dropdown

	<label for="row">row</label>
	<select id="row" name="row">
		<option value="A">A</option>
		<option value="B">B</option>
		<option value="C">C</option>
		<option value="D">D</option>
		<option value="E">E</option>
		<option value="F">F</option>
		<option value="G">G</option>
		<option value="H">H</option>
		<option value="I">I</option>
		<option value="J">J</option>
	</select>


## Creating a form - Col Dropdown

	<label for="col">Col</label>
	<select id="col" name="col">
		<option value="1">1</option>
		<option value="2">2</option>
		<option value="3">3</option>
		<option value="4">4</option>
		<option value="5">5</option>
		<option value="6">6</option>
		<option value="7">7</option>
		<option value="8">8</option>
		<option value="9">9</option>
		<option value="10">10</option>
	</select>


## Creating a form - Submit Button

	<input id="register" type="button" value="register">


## Request Body

	{
		"id": "string",
		"name": "string",
		"team": "string",
		"pos": {
			"row": "string",
			"col": 0
		}
	}

## Registering a new Player

* Constructing the body


##  Creating an object

	var request = {};


## Adding fields to an object

	var result = {};
	result.name = "Bob";


## Adding Fields from a Form

	var result = {};
	
	result.name = document.getElementById("playerName").value;
	result.team = document.getElementById("team").value;


## Adding a position

	var result = {};
	
	result.name = document.getElementById("playerName").value;
	result.team = document.getElementById("team").value;
	
	result.pos = {};
	result.pos.row = document.getElementById("row").value;
	result.pos.col = document.getElementById("col").value;


## Return the result

	var result = {};
	
	result.name = document.getElementById("playerName").value;
	result.team = document.getElementById("team").value;
	result.pos = {};
	result.pos.row = document.getElementById("row").value;
	result.pos.col = document.getElementById("col").value;
	
	return result;


## Test!


## Checking a spot

	//Basically just the position part of the registration!
	var result = {};
	
	result.row = document.getElementById("row").value;
	result.col = document.getElementById("col").value;
	
	return result;


## Lets play some games!


## Can we make this faster?

* What if we wanted to check a whole row?


## Checking by Row with a Loop - Get the Row

	var result = {};
	result.row = document.getElementById("row").value;


## Checking by row with a Loop - Looping over all Cols

	var result = {};
	result.row = document.getElementById("row").value;
	for(var col =1; col <= 10; col++)
	{

	}


## Checking by row with a Loop - Calling the check method

	var result = {};
	result.row = document.getElementById("row").value;
	for(var col =1; col <= 10; col++)
	{
		result.col = col +"";
		hideandseek.checkSpot(result);
	}


## Test by checking the check row button.


