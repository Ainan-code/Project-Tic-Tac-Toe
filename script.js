
 const board = document.querySelector('.gameboard')
 const cells = document.querySelectorAll('[data-cellid]');
 let gameActive;
 let startGame = document.getElementById('startBtn');
 
  




 const playerFactory = (name, marker) => {
  
  getname = () => name
  getmarker = () => marker

 
 return {
  
   name, marker
 }
};

const player1 = playerFactory('player1', "X");

const player2 = playerFactory('player2', "O");


const Gameboard = (() => {
    const gameboard = [];
    let currentplayer = player1;
    let turn = 1;
    
   
    function switchPlayer() {
     
      if (currentplayer == player1) {
        currentplayer = player2;
        
      } 
      else {
        currentplayer = player1;
        
      }
    } 
    
   

    function addMarker() {
      for( let cell of cells) {
        cell.addEventListener("click", function() {
        
         
          
           //  cell.getAttribute("data-cellid");    
            cell.textContent = `${currentplayer.marker}`;
            cell.classList.add(`${currentplayer.marker}`);
            gameboard.push(currentplayer.marker);
            switchPlayer();
         
            
          
        })
       }
    }  

    
   function checkWin() {

   }

   
  
      

 

   

 
    
    function getBoard() {
    return [...gameboard];
  }


  

   
     
    return {
      addMarker,
      
      getBoard,
      
      

  }
})();
    

Gameboard.addMarker();

  

   

   

    















const gameFlow = (() => {

  let currentplayer = player1;

  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

 

  function gameRound() {
    
   firstTurn()
   Gameboard.getBoard
   Gameboard.renderGameboard
 
   switchPlayer

  
  }
  
  
  
  
  
  const switchPlayer = () => {
    currentplayer === player1 ? (currentplayer ===player2) : (currentplayer === player1);

   }

   function firstTurn() {
    return currentplayer;
  }
    
   
   return {
    
    gameRound,
    switchPlayer,
    firstTurn,

    
   };

})();   
     
    



 
  
  
 

  


//cells.forEach(cell => cell.addEventListener('click',Gameboard.renderGameboard) )
  //startGame.addEventListener('click', gameflow.setStage);
