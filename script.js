const Gameboard = (() => {
    const gameboard = ["X", "O", "X", "0", "X", "O", "X", "0", "X"];
    
    function renderGameboard() {
        let board = document.getElementById('gameboard');
        

        for (i = 0; i < gameboard.length; i++) {
            let div = document.createElement('div');
            div.setAttribute('id', i)
            div.className = 'box';
            div.textContent = gameboard[i]
            board.appendChild(div)
        }

    } 

    return {
        renderGameboard,
        

    }
})();

Gameboard.renderGameboard();