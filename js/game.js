







// function endGame (win){
//     if (checkWin(user1) === true) {
//         scoreX += 1;
//         $('.scoreX').html(scoreX);
//         alert("X won the game!");		    	
//         resetBoard();

//     };
//     if (checkWin(user2) === true) {
//         scoreY += 1;
//         $('.scoreY').html(scoreY);
//         alert("Y won the game!");		    	
//         resetBoard();
//     };
//     if (checkTie() == true) {
//         alert("Y won the game!");
//         resetBoard();
//     };
//     }

//     




    /*----- constants -----*/
var board;

    /*----- app's state (variables) -----*/

    // var that manipulate the state of the game
var tilesFlipped;
var tilesUnflipped;
var gameOver;
var x;
var o;
var user1;
var user2;
var playerTurn = "user1";
var letter = "img/flipped_x_tile.png" || "img/flipped_o_tile.png";
 
    /*----- cached element references -----*/

    // vars manipulated for appearance, the selectors we would put in our css
var resetBtn;
var score;
var tileArray; // This is what I am comparing to the wireArray imaging.

    /*----- event listeners -----*/
 
function flipTile(event) {
    if (!tilesUnflipped[event.target.id] && !gameOver) {
        //change image
        event.target.src = "img/flipped_x_tile.png";
    } else if ( user2 && !tilesUnflipped[event.target.id] && !gameOver) {
        event.target.src = "img/flipped_o_tile.png";
    }
}
 function reset(event){
    gameOver = false;
    //show all unflipped tiles
    for (let i = 0; i < tileArray.length; i++) {
      tileArray[i].src = "img/unflipped_tile.png";
      initGame();
    }
}
    /*----- functions -----*/

 function initGame() {
        score = {
            "X": 0,
            "O": 0
        };
        moves = 0;
        turn = "X";
    tilesFlipped = [];
    tilesUnflipped = {
      tile1: false,
      tile2: false,
      tile3: false,
      tile4: false,
      tile5: false,
      tile6: false,
      tile7: false,
      tile8: false,
      tile9: false
    }
}

 function endGame (win){
  
    gameOver = true;
  
    if (win) {
      console.log("You won the game!");
    } else {
      console.log("You lost the game!");
    }
  }

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM loaded");
    body = document.body;
    
    tile1Image = document.getElementById('1');
    tile2Image = document.getElementById('2');
    tile3Image = document.getElementById('3');
    tile4Image = document.getElementById('4');
    tile5Image = document.getElementById('5');
    tile6Image = document.getElementById('6');
    tile7Image = document.getElementById('7');
    tile8Image = document.getElementById('8');
    tile9Image = document.getElementById('9');
    
  
    tileArray = document.getElementById("gameTiles").children;
  
    resetBtn = document.querySelector('button');
    gameTiles = document.getElementById('gameTiles');
    
    gameTiles.addEventListener('click', flipTile);
    
    resetBtn.addEventListener('click', reset);
    initGame();
  });
  


 // Start Game
    // initGame
    // Choose moves
// Click Tiles
// During Game/Click Tiles
    // Tiles can't flip once selected
        // Image change
    // Know when they have won or lost



    /* function checkWin () {

        var tile1Image = document.getElementById('1');
            tile2Image = document.getElementById('2');
            tile3Image = document.getElementById('3');
            tile4Image = document.getElementById('4');
            tile5Image = document.getElementById('5');
            tile6Image = document.getElementById('6');
            tile7Image = document.getElementById('7');
            tile8Image = document.getElementById('8');
            tile9Image = document.getElementById('9');
    
        if (tile1Image.innerHTML !== "" && tile1Image.innerHTML === tile2Image.innerHTML && tile1Image.innerHTML === tile3Image.innerHTML) {
            console.log('win');
        } else if (tile4Image.innerHTML !== "" && tile4Image.innerHTML === tile5Image.innerHTML && tile4Image.innerHTML === tile6Image.innerHTML) {
            console.log('win');
        } else if (tile7Image.innerHTML !== ""  && tile7Image.innerHTML === tile8Image.innerHTML && tile7Image.innerHTML === tile9Image.innerHTML) {
            console.log('win');
        } else if (tile1Image.innerHTML !== ""  && tile1Image.innerHTML === tile4Image.innerHTML && tile1Image.innerHTML === tile7Image.innerHTML) {
            console.log('win');
        } else if (tile2Image.innerHTML !== ""  && tile2Image.innerHTML === tile5Image.innerHTML && tile2Image.innerHTML === tile8Image.innerHTML) {
            console.log('win');
        } else if (tile3Image.innerHTML !== ""  && tile3Image.innerHTML === tile6Image.innerHTML && tile3Image.innerHTML === tile9Image.innerHTML) {
            console.log('win');
        } else if (tile1Image.innerHTML !== ""  && tile1Image.innerHTML === tile5Image.innerHTML && tile1Image.innerHTML === tile9Image.innerHTML) {
            console.log('win');
        } else if (tile3Image.innerHTML !== ""  && tile3Image.innerHTML === tile5Image.innerHTML && tile3Image.innerHTML === tile7Image.innerHTML) {
            console.log('win');
        } else {
            console.log("cat's game");
        }
    }
    
    var gameTiles = document.querySelectorAll(".gameTiles"), x_or_o = 0;
    
    for(var i =0; i < gameTiles.length - 1; i++) {
        tiles[i].onclick = function() {
            if(x_or_o%2 === 0){
                console.log(x_or_o);
                this.innerHTML = "x";
                checkWin();
                x_or_o  += 1;
            } else {
                console.log(x_or_o);
                this.src = "o";
                checkWin();
                x_or_o  += 1;
            }
        };
    } */