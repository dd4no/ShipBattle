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
    const turnDisplay = document.querySelector('#turn');
    const infoDisplay = document.querySelector('#info');
    // Grid square arrays
    const playerSquares = [];
    const opponentSquares = [];
    
    // Create Board    
    // Make a grid
    function makeGrid(grid, squares) {
        // Create 100 total squares
        for(let i=1; i<=100; i++){
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
    // Define edges
    function addEdges(squares) {
        // Top
        for(let t=0; t<10; t++) {
            squares[t].classList.add('top')
        };
        // Right
        for(let r=19; r<100; r+=10) {
            squares[r].classList.add('right')
        };
        // Bottom
        for(let b=90; b<100; b++) {
            squares[b].classList.add('bottom')
        };
        // Left
        for(let l=0; l<=90; l+=10) {
            squares[l].classList.add('left')
        };
    }
    
    // Create player grid
    makeGrid(playerGrid, playerSquares);
    addEdges(playerSquares);

    // Create opponent grid
    makeGrid(opponentGrid, opponentSquares);
    addEdges(opponentSquares)
    
    
    // Ship Objects
    const fleet = [
        {
            name: 'destroyer',
            size: 2,
            directions: [
                [0,1],
                [0,10]
            ]
        },
        {
            name: 'submarine',
            size: 3,
            directions: [
                [0,1,2],
                [0,10,20],
            ]
        },
        {
            name: 'cruiser',
            size: 3,
            directions: [
                [0,1,2],
                [0,10,20]
            ]
        },
        {
            name: 'battleship',
            size: 4,
            directions: [
                [0,1,2,3],
                [0,10,20,30]
            ]
        },
        {
            name: 'carrier',
            size: 5,
            directions: [
                [0,1,2,3,4],
                [0,10,20,30,40]
            ]
        }
    ]
    
    // Deploy Random Opponent Fleet
    function deploy(ship) {
        console.log(ship.name);
        
        // Generate a random starting point
        let randomStart = Math.ceil(Math.random() * 100);
        console.log(`random start position: `  + randomStart);
        
        // Generate random ship orientation.
        let randomDirection = Math.floor(Math.random() * 2);
        
        // Assign increment value
        let directionIncrement;
        let orientationArray = [];
        switch (randomDirection) {
            case 1:
                // 1 = Vertical alignment. Increment direction by 10 squares
                directionIncrement = 10;
                orientationArray = ship.directions[1];
                break;
                
            default:
                // 0 = Horizontal alignment. Increment direction by 1 square
                directionIncrement = 1;
            orientationArray = ship.directions[0];
            break;
        }
            console.log("direction Increment: " + directionIncrement);
            console.log("current orientation: " + orientationArray);

            // function checkFit(start, orientation, length) {
            //     switch (orientation) {
            //         case 1:
            //             { if start.classList.contains('edge')}
            //             break;
                
            //         default:
            //             {}
            //             break;
            //     }
            // }

                
            // const isOccupied = orientationArray.some(index => opponentSquares[randomStart + index].classList.contains('occupied'));
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
            
            // deploy(fleet[0])
            deploy(fleet[1])
            // deploy(fleet[2])
            // deploy(fleet[3])
            // deploy(fleet[4])
           
            


            // let ifHorizontal = true;
            // function rotate(ship) {
                //     if (isHorizontal) {
                    //         ship.classList.add('vertical');
                    //         isHorizontal = false;
                    //     }
                    // }
                    
})
                    
                    