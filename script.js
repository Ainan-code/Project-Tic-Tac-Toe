
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
    const player1array = [];
    const player2array = [];
    
    
   
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
        

          if(cell.textContent !== "") {
            return;
          }
         

          if(cell.textContent == "") {
            let spot = parseInt(cell.getAttribute("data-cellid"));    
            cell.textContent = `${currentplayer.marker}`;
            cell.classList.add(`${currentplayer.marker}`);
            gameboard.push(currentplayer.marker);
            `${currentplayer.marker}`== player1 ? player1array.push(spot) : player2array.push(spot);
            switchPlayer();
         
          }
          
           
            
          
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
      player1array,
      player2array,
      
      

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
