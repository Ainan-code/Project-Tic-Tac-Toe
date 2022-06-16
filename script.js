
 const board = document.querySelector('.gameboard')
 const cells = document.querySelectorAll('[data-cellid]');



const Gameboard = (() => {
    const gameboard = [];
    
   

   
     
   
    
    const renderGameboard = () => {
        
      for(let i=0; i < cells.length; i++) {
         cells[i].setAttribute('data-cellid', i)
        cells[i].textContent = gameboard[i]
      
        
      }


    } 

    const setCell = (index, marker)  => {
      gameboard[index] = marker
    }

    

    return {
        renderGameboard,
        setCell,
        gameboard,
        

    }
})();

Gameboard.renderGameboard();



const playerFactory = (name, marker) => {
  
   getname = () => name
   getmarker = () => marker

  
  return {
   
    name, marker
  }



};

const player1 = playerFactory('player1', "X");

const player2 = playerFactory('player2', "0");

console.log({player1, player2})


const displayController = (() => {
  
   const  display = () => {

     cells.forEach((element) => {
       element.addEventListener('click', () => {


         element.textContent = `${player2.marker}`;
         Gameboard.gameboard.push(player2.marker);

       });
     });

   }; 
   
   return {
    display
   };

})();   
     
    
  displayController.display();
  
  
 

  




