//  Ship Battle!

// Main Program

// Load document and set up global variables for game objects
document.addEventListener('DOMContentLoaded', () => {
    // Battle grids
    const playerGrid = document.querySelector('.player');
    const opponentGrid = document.querySelector('.opponent');
    const displayGrid = document.querySelector('.display');
    // Ships
    const ships = document.querySelectorAll('.ship');
    const destroyer = document.querySelector('.destroyer-hull');
    const submarine = document.querySelector('.submarine-hull');
    const cruiser = document.querySelector('.cruiser-hull');
    const battleship = document.querySelector('.battleship-hull');
    const carrier = document.querySelector('.carrier-hull');
    // Interface items
    const startButton = document.querySelector('#start');
    const rotateButton = document.querySelector('#rotate');
    let ifHorizontal = true;
    const turnDisplay = document.querySelector('#turn');
    const infoDisplay = document.querySelector('#info');
    // Grid square arrays
    const playerSquares = [];
    const opponentSquares = [];

    // Create Board
    // Make a grid
    function makeGrid(grid, squares) {
        // 10 x 10 grid with 100 total squares
        for(let i=0; i<100; i++){
            // Create a square
            const square = document.createElement('div');
            // Assign square an ID number
            square.dataset.id = i;
            // Add square to the grid container
            grid.appendChild(square);
            // Add to array of squares
            squares.push(square);
        }
    }
    // Create player grid
    makeGrid(playerGrid, playerSquares);
    // Create opponent grid
    makeGrid(opponentGrid, opponentSquares);

    // Ship Objects
    const fleet = [
        {
            name: 'destroyer',
            directions: [
                [0,1],
                [0,10]
            ]
        },
        {
            name: 'submarine',
            directions: [
                [0,1,2],
                [0,10,20]
            ]
        },
        {
            name: 'cruiser',
            directions: [
                [0,1,2],
                [0,10,20]
            ]
        },
        {
            name: 'battleship',
            directions: [
                [0,1,2,3],
                [0,10,20,30]
            ]
        },
        {
            name: 'carrier',
            directions: [
                [0,1,2,3,4],
                [0,10,20,30,40]
            ]
        }
    ]
    // console.log(fleet);

    // Deploy Random Opponent Fleet
    function deploy(ship) {
        // Generate random ship orientation.
        let randomDirection = Math.floor(Math.random() * 2);
        console.log(`random direction ${ship.name}: `  + randomDirection);

        // Store current orientation array
        let current = ship.directions[randomDirection];
        console.log("current orientation: " + current);

        // Determine generated orientation and assign direction variable.
        if (randomDirection === 0) direction = 1;
        if (randomDirection === 1) direction = 10;
        console.log("direction: " + direction);

        // Generate a random starting point
        let randomStart = Math.abs(Math.floor(Math.random() * 100 - (ship.directions[0].length * direction)));
        console.log("random start position: " + randomStart);

        const isOccupied = current.some(index => opponentSquares[randomStart + index].classList.contains('occupied'));
        console.log(isOccupied);

        const isRightEdge = current.some(index => (randomStart + index) % 10 === 10 - 1)
        console.log(isRightEdge);

        const isLeftEdge = current.some(index => (randomStart + index) % 10 === 0)
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

    // function rotate(ship) {
    //     if (isHorizontal) {
    //         ship.classList.add('vertical');
    //         isHorizontal = false;
    //     }
    // }

})

