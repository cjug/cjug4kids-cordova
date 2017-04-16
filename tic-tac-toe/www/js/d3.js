var turn = 'x';
var svgContainer = d3.select("main")
  .append("svg")
    .attr("width",  300)
    .attr("height", 300)
    .attr("border", 1);

svgContainer.selectAll('rect')
  .data([0,1,2,3,4,5,6,7,8])
  .enter()
  .append("rect")
  .attr("x", function(d){ return d%3*100; })
  .attr("y", function(d){ return Math.floor(d/3)*100; })
  .attr("width", 100)
  .attr("height", 100)
  .attr("class", 'cell')
  .on('click', function(position) {
    if (boxes[position] === value_Blank) {
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
	  
	  var judgement = judge(boxes);

      if (judgement === judgement_draw) {
        alert('Draw!');
        location.reload();
      } else if(judgement === judgement_win) {
          alert('O wins!');
          location.reload();
      }
	  else if(judgement === judgement_lose) {
		  alert('X wins!');
		  location.reload();
	  }
    }
  })
  ;

function placeO(position) {
  svgContainer.append("circle")
  .attr("cx", position % 3 * 100 + 50)
  .attr("cy", Math.floor(position/3) * 100 + 50)
  .attr("r", 40)
  .attr("class", "o");

  boxes[position] = value_O;
}


function placeX(position) {
  svgContainer.append("line")
    .attr("y1", Math.floor(position/3) * 100 + 10)
    .attr("x1", (position % 3) * 100 + 10)
    .attr("y2", Math.floor(position/3) * 100 + 90)
    .attr("x2", (position % 3) * 100 + 90)
    .attr("class", "x");
  svgContainer.append("line")
    .attr("y1", Math.floor(position/3) * 100 + 90)
    .attr("x1", (position % 3) * 100 + 10)
    .attr("y2", Math.floor(position/3) * 100 + 10)
    .attr("x2", (position % 3) * 100 + 90)
    .attr("class", "x");
  boxes[position] = value_X;
}
