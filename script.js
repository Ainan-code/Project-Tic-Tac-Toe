
 const board = document.querySelector('#gameboard')
 const cells = document.querySelectorAll('[data-cellid]');
 let gameActive;
 let startGame = document.getElementById('startBtn');
 let startBtn = document.getElementById("submitBtn");
 
 
  




 const playerFactory = (name, marker) => {
  
  getname = () => name
  getmarker = () => marker

  const playerArr = () => [];

 
 return {
  
   name, marker, playerArr
 }
};

const player1 = playerFactory('player1', "X");

const player2 = playerFactory('player2', "O" );


let turn = 0;
 
const Gameboard = (() => {
    const gameboard = [];
    let currentplayer;
   
    
    const player1array = [];
    const player2array = []; 
    const winCombinations =  [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    
    
   
    function switchPlayer() {
     
      if (turn === 0) {
        currentplayer = player1;
        turn = 1;
        
        
      }

     else {
        currentplayer = player2;
        turn = 0;
        
        
      }
    
      return currentplayer
      
    } 
    
   

    function addMarker() {
      for( let cell of cells) {
        cell.addEventListener("click", function() {
        

          if(cell.innerHTML !== "") {
            return;
          }
         

          if(cell.innerHTML === "") {
            
            let spot = parseInt(cell.getAttribute("data-cellid")) 
            cell.innerHTML = `${switchPlayer().marker}`;
            cell.classList.add(`${switchPlayer().marker}`);
            gameboard.push(`${switchPlayer().marker}`);
           
            turn === 0 ? (player2array.push(spot)) :  (player1array.push(spot));
            turn === 0 ? (checkWin(player2array)) :  (checkWin(player1array));
            
           
      
           
           
         
          }
          
          
          
        })
       }
    }  

    
   function checkWin(player) {

   for(let i=0; i < winCombinations.length; i++) {
    for(let j=0; j < winCombinations.length; j++) {
        
      if (player.includes(winCombinations[i][0]) && player.includes(winCombinations[i][1]) && player.includes(winCombinations[i][2]) && player.length >= 3)  {
         Win()
        break
      } 
    
       



    
   }



   }

  }
  
      
  function Win(player) {
    let modal = document.querySelector(".modal");
    let message = document.querySelector(".message");
    modal.style.display = "flex";
    if(player === player1array) {
      message.innerHTML = `${player1.name} Wins This Round`
    }
    if(player === player2array) {
      message.innerHTML = `${player2.name} Wins This Round`
    }
     }
 

   

 
    
    function getBoard() {
    return [...gameboard];
  }


  

   
     
    return {
      addMarker,
      switchPlayer,
      
      getBoard,
      player1array,
      player2array,
      checkWin
      
      

  }
})();

    



  

   

   

    















const gameFlow = (() => {

 

 
  startBtn.addEventListener("click", Gameon );
  const nameInputs = document.querySelector(".name-inputs");
  const names = document.querySelectorAll(".name");

  function Gameon(event) {

   event.preventDefault();
    
   
    player1.name = names[0].value;
    player2.name = names[1].value;
    board.style.display = "grid";
    nameInputs.style.display = "none";
    Gameboard.addMarker();
   
  }


  
    


  

  
   
   return {
    
   Gameon,

    
   };

})();   
     

    



 
  

  



