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
        const rowNames = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
        rowNames.forEach(element => {
            for(let i=1; i<=10; i++){
                // Create a square
                const square = document.createElement('div');
                // Assign square an ID number
                square.dataset.id = element + i;
                // Add square to the grid container
                grid.appendChild(square);
                // Add to array of squares
                squares.push(square);
            }
            
        });
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
        console.log(ship.name);

        // Generate a random starting point
        let randomStart = Math.floor(Math.random() * 100);
        console.log(`random start position: `  + randomStart);
        
        // Generate random ship orientation.
        let randomDirection = Math.floor(Math.random() * 2);
        // console.log(`random direction: `  + randomDirection);

        let directionIncrement;
        switch (randomDirection) {
            case 1:
                // 1 = Vertical alignment. Increment direction by 10 squares
                directionIncrement = 10;
                break;
                
            default:
                // 0 = Horizontal alignment. Increment direction by 1 square
                directionIncrement = 1;
                break;
        }
        console.log("direction Increment: " + directionIncrement);

        // Store current orientation array
        // let current = ship.directions[randomDirection];
        // console.log("current orientation: " + current);
        

        



        // if (randomStart + ship.directions[0].length)
        

        // const isOccupied = current.some(index => opponentSquares[randomStart + index].classList.contains('occupied'));
        // console.log(isOccupied);

        // const isRightEdge = current.some(index => (randomStart + index) % 10 === 10 - 1)
        // console.log(isRightEdge);

        // const isLeftEdge = current.some(index => (randomStart + index) % 10 === 0)
        // console.log(isLeftEdge);
        
        // if (!isOccupied && !isRightEdge && !isLeftEdge){
        //     current.forEach(index => opponentSquares[randomStart + index].classList.add('occupied', ship.name))
        // }
        // else deploy(ship)
    }

    deploy(fleet[0])
    // deploy(fleet[1])
    // deploy(fleet[2])
    // deploy(fleet[3])
    // deploy(fleet[4])   

    // function rotate(ship) {
    //     if (isHorizontal) {
    //         ship.classList.add('vertical');
    //         isHorizontal = false;
    //     }
    // }

})

