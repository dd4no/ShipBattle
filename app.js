
document.addEventListener('DOMContentLoaded', () => {

    const playerGrid = document.querySelector('.player');
    const opponentGrid = document.querySelector('.opponent');
    const displayGrid = document.querySelector('.display');
    const ships = document.querySelectorAll('.ship');
    const destroyer = document.querySelector('.destroyer-hull');
    const submarine = document.querySelector('.submarine-hull');
    const cruiser = document.querySelector('.cruiser-hull');
    const battleship = document.querySelector('.battleship-hull');
    const carrier = document.querySelector('.carrier-hull');
    const startButton = document.querySelector('#start');
    const rotateButton = document.querySelector('#rotate');
    const turnDisplay = document.querySelector('#turn');
    const infoDisplay = document.querySelector('#info');
    const playerSquares = [];
    const opponentSquares = [];
    const width = 10;
    let ifHorizontal = true;

    // Create Board
    function createBoard(grid, squares) {
        for(let i=0; i<width*width; i++){
            const square = document.createElement('div');
            square.dataset.id = i;
            grid.appendChild(square);
            squares.push(square);
        }
    }
    createBoard(playerGrid, playerSquares);
    createBoard(opponentGrid, opponentSquares);

    // Ships
    const fleet = [
        {
            name: 'destroyer',
            directions: [
                [0,1],
                [0,width]
            ]
        },
        {
            name: 'submarine',
            directions: [
                [0,1,2],
                [0,width,width*2]
            ]
        },
        {
            name: 'cruiser',
            directions: [
                [0,1,2],
                [0,width,width*2]
            ]
        },
        {
            name: 'battleship',
            directions: [
                [0,1,2,3],
                [0,width,width*2,width*3]
            ]
        },
        {
            name: 'carrier',
            directions: [
                [0,1,2,3,4],
                [0,width,width*2,width*3,width*4]
            ]
        }
    ]
    // console.log(fleet);

    // Deploy Random Opponent Fleet
    function deploy(ship) {
        // Generate random ship orientation.
        let randomDirection = Math.floor(Math.random() * ship.directions.length);
        console.log("random direction: " + randomDirection);

        // Store current orientation array
        let current = ship.directions[randomDirection];
        console.log("current orientation: " + current);

        // Determine generated orientation and assign direction variable.
        if (randomDirection === 0) {
            direction = 1;
        }
        if (randomDirection === 1) {
            direction = 10;
        }
        console.log("direction: " + direction);

        // Generate a random starting point considering every ship's length
        let randomStart = Math.abs(Math.floor(Math.random() * 100 - (ship.directions[0].length * direction)));
        console.log("random start position: " + randomStart);

        const isOccupied = current.some(index => opponentSquares[randomStart + index].classList.contains('occupied'));
        console.log(isOccupied);

        const isRightEdge = current.some(index => (randomStart + index) % width === width - 1)
        console.log(isRightEdge);

        const isLeftEdge = current.some(index => (randomStart + index) % width === 0)
        console.log(isLeftEdge);
        
        if (!isOccupied && !isRightEdge && !isLeftEdge){
            current.forEach(index => opponentSquares[randomStart + index].classList.add('occupied', ship.name))
        }
        else deploy(ship)
    }

    deploy(fleet[0])
    deploy(fleet[1])
    deploy(fleet[2])
    deploy(fleet[3])
    deploy(fleet[4])   

    function rotate(ship) {
        if (isHorizontal) {
            ship.classList.add('vertical');
            isHorizontal = false;
        }
    }

})

