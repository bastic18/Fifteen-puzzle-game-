$(document).ready(function(){
const sbutton= document.getElementById("shufflebutton");

	spaceX = '300px'; 
	spaceY = '300px';
var puzzleArea = $('#puzzlearea');
var body = document.getElementsByTagName('body');
	var explain=document.getElementsByClassName('explanation');


var puzzleArea = document.getElementById('puzzlearea');
	var gamePiece = puzzleArea.getElementsByTagName('div'); //retrieve element within puzzlearea

	for (var i=0; i<gamePiece.length; i++) //applies features to each puzzle piece 
		
	{

		gamePiece[i].className = 'puzzlepiece'; //setting up the puzzle piece code

		gamePiece[i].style.left = (i%4*100)+'px'; //calculates the position for puzzle pieces from the left of the screen

		gamePiece[i].style.top = (parseInt(i/4)*100) + 'px'; //calculates the position for puzzle pieces from the top of the screen

		gamePiece[i].style.backgroundPosition= '-' + gamePiece[i].style.left + ' ' + '-' + gamePiece[i].style.top; 
		//calculates the position of the background picture so in moves in relation to the puzzle pieces
		gamePiece[i].style.backgroundImage="url('naruto.jpg')"; 



		gamePiece[i].addEventListener( "mouseout" ,function() //activates whenever mouse moves out of puzzle piece

		{

			this.style.border = "2px solid black"; 

			this.style.color = "#000000"; 

			this.style.textDecoration = "none";

		});



		gamePiece[i].addEventListener( "click", function() //activates when mouse clicks on a puzzle piece

		{

			
				if (left(spaceX, spaceY) == (parseInt(this.innerHTML)-1))
			{
				

				var swappos;
				swappos = gamePiece[this.innerHTML-1].style.left;

				gamePiece[this.innerHTML-1].style.left = spaceX;

				spaceX = swappos;

				swappos = gamePiece[this.innerHTML-1].style.top;

				gamePiece[this.innerHTML-1].style.top = spaceY;

				spaceY = swappos;


				if (solve()) //check if puzzle pieces are ordered correctly

				{
						
						body[0].style.backgroundImage= "url('naruto.jpg')";
						explain[0].style.visibility="hidden"; 
						explain[1].style.visibility="hidden"; 
						alert("You have won!!!!!! feel free to shuffle and play again");
						body[0].style.backgroundImage= "none";	
						explain[0].style.visibility="visible";
						explain[1].style.visibility="visible";  
				}

				return;

			}




	if (right(spaceX, spaceY) == (parseInt(this.innerHTML)-1))
			{
			
				var swappos;
				swappos = gamePiece[this.innerHTML-1].style.left;

				gamePiece[this.innerHTML-1].style.left = spaceX;

				spaceX = swappos;

				swappos = gamePiece[this.innerHTML-1].style.top;

				gamePiece[this.innerHTML-1].style.top = spaceY;

				spaceY = swappos;


				if (solve()) //check if puzzle pieces are ordered correctly


				{
						body[0].style.backgroundImage= "url('naruto.jpg')";
						explain[0].style.visibility="hidden"; 
						explain[1].style.visibility="hidden"; 
						alert("You have won!!!!!! feel free to shuffle and play again");
						body[0].style.backgroundImage= "none";	
						explain[0].style.visibility="visible";
						explain[1].style.visibility="visible";  
				}

				return;

			}


	if (up(spaceX, spaceY) == (parseInt(this.innerHTML)-1))
			{
				

				var swappos;
				swappos = gamePiece[this.innerHTML-1].style.left;

				gamePiece[this.innerHTML-1].style.left = spaceX;

				spaceX = swappos;

				swappos = gamePiece[this.innerHTML-1].style.top;

				gamePiece[this.innerHTML-1].style.top = spaceY;

				spaceY = swappos;


				if (solve()) //check if puzzle pieces are ordered correctly


				{
						body[0].style.backgroundImage= "url('naruto.jpg')";
						explain[0].style.visibility="hidden"; 
						explain[1].style.visibility="hidden"; 
						alert("You have won!!!!!! feel free to shuffle and play again");
						body[0].style.backgroundImage= "none";	
						explain[0].style.visibility="visible";
						explain[1].style.visibility="visible";  
				}

				return;

			}



				if (down(spaceX, spaceY) == (parseInt(this.innerHTML)-1))
			{
				
				var swappos;
				swappos = gamePiece[this.innerHTML-1].style.left;

				gamePiece[this.innerHTML-1].style.left = spaceX;

				spaceX = swappos;

				swappos = gamePiece[this.innerHTML-1].style.top;

				gamePiece[this.innerHTML-1].style.top = spaceY;

				spaceY = swappos;


				if (solve()) //check if puzzle pieces are ordered correctly


				{


						
						body[0].style.backgroundImage= "url('naruto.jpg')";
						explain[0].style.visibility="hidden"; 
						explain[1].style.visibility="hidden"; 
						alert("You have won!!!!!! feel free to shuffle and play again");
						body[0].style.backgroundImage= "none";	
						explain[0].style.visibility="visible";
						explain[1].style.visibility="visible";  
				}

				return;

			}


		});



		gamePiece[i].addEventListener("mouseover", function(){
				this.style.border = "5px solid green"; 
				this.style.color = "green"; 
                this.style.backgroundImage="url('naruto.jpg')"; 
                this.style.fontWeight = "900";
		});


	}



	sbutton.addEventListener("click",function(){
		s();
	});



function s(){
	var swappos;
	for (var i=0; i<300; i++) 

		{

			var r = parseInt(Math.random()* 100) %4; //generates a random number for shuffling each piece

			if (r == 0)

			{

				var temp = down(spaceX, spaceY);

				if ( temp != -1) 

				{

					
				swappos = gamePiece[temp].style.left;

				gamePiece[temp].style.left = spaceX;

				spaceX = swappos;

				swappos = gamePiece[temp].style.top;

				gamePiece[temp].style.top = spaceY;

				spaceY = swappos;


				}


			}

			if (r == 1)

			{



			var temp = up(spaceX, spaceY); 

				if ( temp != -1)

				{

				
				swappos = gamePiece[temp].style.left;

				gamePiece[temp].style.left = spaceX;

				spaceX = swappos;

				swappos = gamePiece[temp].style.top;

				gamePiece[temp].style.top = spaceY;

				spaceY = swappos;

				}

			}



			if (r == 2)

			{

			
				var temp = right(spaceX, spaceY);
				
				if ( temp != -1)

				{

					
				swappos = gamePiece[temp].style.left;

				gamePiece[temp].style.left = spaceX;

				spaceX = swappos;

				swappos = gamePiece[temp].style.top;

				gamePiece[temp].style.top = spaceY;

				spaceY = swappos;





				}


			}  if (r == 3)

			{ 





					var temp = left(spaceX, spaceY);
				
				if ( temp != -1)

				{

					
				swappos = gamePiece[temp].style.left;

				gamePiece[temp].style.left = spaceX;

				spaceX = swappos;

				swappos = gamePiece[temp].style.top;

				gamePiece[temp].style.top = spaceY;

				spaceY = swappos;





				}


			}


		}
}



function solve() //checks if game is over

{

	var finish = true;

	for (var i = 0; i < gamePiece.length; i++) // for looop used to check if each piece is ordered correctly
	{

		var top = parseInt(gamePiece[i].style.top);

		var left = parseInt(gamePiece[i].style.left);


		if (left != (i%4*100) || top != parseInt(i/4)*100) //using left and top margins to check if each puzzle piece align properly

		{

			finish = false;

			break;

		}

	}

	return finish;

}



function left(x, y) //align a puzzle piece to the left 

{

	if (parseInt(x) > 0)

	{

		for (var i = 0; i < gamePiece.length; i++) 

		{

			if (parseInt(gamePiece[i].style.left) + 100 == parseInt(x) && parseInt(gamePiece[i].style.top) == parseInt(y))

			{

				return i;

			} 

		}

	}

	else 

	{

		return -1;

	}

}



function right (x, y) //align a puzzle piece to the right
{

	if (parseInt(x) < 300)

	{

		for (var i =0; i<gamePiece.length; i++){

			if (parseInt(gamePiece[i].style.left) - 100 == parseInt(x) && parseInt(gamePiece[i].style.top) == parseInt(y)) 

			{

				return i;

			}

		}

	}

	else

	{

		return -1;

	} 

}



function up(x, y) //alaign a puzzle piece upwards
{


	if (parseInt(y) > 0)

	{

		for (var i=0; i<gamePiece.length; i++)

		{

			if (parseInt(gamePiece[i].style.top) + 100 == parseInt(y) && parseInt(gamePiece[i].style.left) == parseInt(x)) 

			{

				return i;

			}

		} 

	}

	else 

	{

		return -1;

	}

}



function down (x, y) //alaign a puzzle piece downwards

{

	if (parseInt(y) < 300)

	{

		for (var i=0; i<gamePiece.length; i++)

		{

			if (parseInt(gamePiece[i].style.top) - 100 == parseInt(y) && parseInt(gamePiece[i].style.left) == parseInt(x)) 

			{

				return i;

			}

		}

	}

	else

	{

		return -1;

	} 

}




});



