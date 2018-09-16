/*----- constants -----*/


/*----- app's state (variables) -----*/
// var that manipulate the state of the game

var tilesFlipped;
var tilesUnflipped;
var gameOver;

/*----- cached element references -----*/
// vars manipulated for appearance, the selectors we would put in our css

var resetBtn;
var score;
var tileArray; // This is what I am comparing to the wireArray imaging.

/*----- event listeners -----*/

function flipTile(event) {
    if (!tilesUnflipped[event.target.id] && !gameOver) {
        //change image
        event.target.src = "img/flipped_x_tile.png"
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
    
    tile1Image = document.getElementById('tile1');
    tile2Image = document.getElementById('tile2');
    tile3Image = document.getElementById('tile3');
    tile4Image = document.getElementById('tile4');
    tile5Image = document.getElementById('tile5');
    tile6Image = document.getElementById('tile6');
    tile7Image = document.getElementById('tile7');
    tile8Image = document.getElementById('tile8');
    tile9Image = document.getElementById('tile9');
    
  
    tileArray = document.getElementById("gameTiles").children;
  
    resetBtn = document.querySelector('button');
    wireBox = document.getElementById('wireBox');
    
    gameTiles.addEventListener('click', flipTile);
    
    resetBtn.addEventListener('click', reset);
    initGame();
  });
  

// Start Game
    // initGame
    // Choose moves
// During Game/Click Tiles
    // Tiles can't flip once selected
        // Image change
    // Know when they have won or lost
        // Alert
    // Combinations
        // Lots of little functions
// Restart
    // Reset Button Functionality
    // Bring back to the Original initGame function

// Keep Score