const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let currentLevel = "level3";

// player
const sokoman = {
    x: 350,
    y: 450,
    row: 0,
    col: 0,
    size: 50,
    fillStyle: "black",
};

const updatePlayerPosition = () => {
    sokoman.row = (sokoman.y / 50) - 1;
    sokoman.col = (sokoman.x / 50) - 1;
};

// brick
const bricks = {
    level1: [{
        x: 250,
        y: 200,
        row: 0,
        col: 0,
        size: 50,
    }, ],

    level2: [{
        x: 250,
        y: 200,
        row: 0,
        col: 0,
        size: 50,
    }, ],

    level3: [{
            x: 100,
            y: 100,
            row: 0,
            col: 0,
            size: 50,
        },
        {
            x: 150,
            y: 100,
            row: 0,
            col: 0,
            size: 50,
        },
        {
            x: 150,
            y: 150,
            row: 0,
            col: 0,
            size: 50,
        },
        {
            x: 100,
            y: 150,
            row: 0,
            col: 0,
            size: 50,
        },
        {
            x: 100,
            y: 300,
            row: 0,
            col: 0,
            size: 50,
        },
        {
            x: 100,
            y: 350,
            row: 0,
            col: 0,
            size: 50,
        },
        {
            x: 150,
            y: 300,
            row: 0,
            col: 0,
            size: 50,
        },
        {
            x: 150,
            y: 350,
            row: 0,
            col: 0,
            size: 50,
        },
        // top middle stack 
        // left
        {
            x: 250,
            y: 50,
            row: 0,
            col: 0,
            size: 50,
        },
        {
            x: 250,
            y: 100,
            row: 0,
            col: 0,
            size: 50,
        },
        {
            x: 250,
            y: 150,
            row: 0,
            col: 0,
            size: 50,
        },
        {
            x: 250,
            y: 200,
            row: 0,
            col: 0,
            size: 50,
        },
        // top middle stack 
        // right
        {
            x: 300,
            y: 50,
            row: 0,
            col: 0,
            size: 50,
        },
        {
            x: 300,
            y: 100,
            row: 0,
            col: 0,
            size: 50,
        },
        {
            x: 300,
            y: 150,
            row: 0,
            col: 0,
            size: 50,
        },
        {
            x: 300,
            y: 200,
            row: 0,
            col: 0,
            size: 50,
        },

        // bottom middle 
        // left
        {
            x: 250,
            y: 300,
            row: 0,
            col: 0,
            size: 50,
        },
        {
            x: 250,
            y: 350,
            row: 0,
            col: 0,
            size: 50,
        },
        {
            x: 250,
            y: 400,
            row: 0,
            col: 0,
            size: 50,
        },
        {
            x: 250,
            y: 450,
            row: 0,
            col: 0,
            size: 50,
        },
        // bottom middle 
        // right
        {
            x: 300,
            y: 300,
            row: 0,
            col: 0,
            size: 50,
        },
        {
            x: 300,
            y: 350,
            row: 0,
            col: 0,
            size: 50,
        },
        {
            x: 300,
            y: 400,
            row: 0,
            col: 0,
            size: 50,
        },
        {
            x: 300,
            y: 450,
            row: 0,
            col: 0,
            size: 50,
        },
        // bottom middle stack
        {
            x: 250,
            y: 50,
            row: 0,
            col: 0,
            size: 50,
        },
        {
            x: 250,
            y: 100,
            row: 0,
            col: 0,
            size: 50,
        },
        {
            x: 250,
            y: 150,
            row: 0,
            col: 0,
            size: 50,
        },
        {
            x: 250,
            y: 200,
            row: 0,
            col: 0,
            size: 50,
        },
        {
            x: 300,
            y: 50,
            row: 0,
            col: 0,
            size: 50,
        },
        {
            x: 300,
            y: 100,
            row: 0,
            col: 0,
            size: 50,
        },
        {
            x: 300,
            y: 150,
            row: 0,
            col: 0,
            size: 50,
        },
        {
            x: 300,
            y: 200,
            row: 0,
            col: 0,
            size: 50,
        },

    ],
};

const updateAllBrickPositions = () => {
    for (let i = 0; i < bricks[currentLevel].length; i++) {
        let brick = bricks[currentLevel][i];
        brick.row = (brick.y / 50) - 1;
        brick.col = (brick.x / 50) - 1;
    }
};

// goal

const goals = {
    level1: [{
        x: 450,
        y: 50,
        row: 0,
        col: 0,
        size: 50,
    }, ],

    level2: [{
            x: 450,
            y: 50,
            row: 0,
            col: 0,
            size: 50,
        },
        {
            x: 450,
            y: 100,
            row: 0,
            col: 0,
            size: 50,
        }
    ],
    level3: [{
            x: 400,
            y: 200,
            row: 0,
            col: 0,
            size: 50,
        },
        {
            x: 400,
            y: 250,
            row: 0,
            col: 0,
            size: 50,
        },
        {
            x: 400,
            y: 300,
            row: 0,
            col: 0,
            size: 50,
        },
    ],

};

const updateAllGoalPositions = () => {
    for (let i = 0; i < goals[currentLevel].length; i++) {
        let goal = goals[currentLevel][i];
        goal.row = (goal.y / 50) - 1;
        goal.col = (goal.x / 50) - 1;
    }
};

// crate
const crates = {
    level1: [{
            x: 300,
            y: 250,
            row: 0,
            col: 0,
            size: 50,
        },

    ],

    level2: [{
            x: 300,
            y: 250,
            row: 0,
            col: 0,
            size: 50,
        },

        {
            x: 250,
            y: 250,
            row: 0,
            col: 0,
            size: 50,
        },
    ],
    level3: [{
            // 0
            x: 350,
            y: 200,
            row: 0,
            col: 0,
            size: 50,
        },
        // 1
        {
            x: 350,
            y: 250,
            row: 0,
            col: 0,
            size: 50,
        },
        // 2
        {
            x: 350,
            y: 300,
            row: 0,
            col: 0,
            size: 50,
        },
    ],

};

const updateAllCratesPositions = () => {
    for (let i = 0; i < crates[currentLevel].length; i++) {
        let crate = crates[currentLevel][i];

        crate.row = (crate.y / 50) - 1;
        crate.col = (crate.x / 50) - 1;
    }
};

const drawBoard = () => {
    ctx.beginPath();
    // board size
    var cols = 9;
    var rows = 9;
    let boardSpace = 50;

    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            var x = (i + 1) * boardSpace;
            var y = (j + 1) * boardSpace;
            ctx.rect(x, y, 50, 50);
            ctx.lineWidth = 4;
            ctx.strokeStyle = "black";
            ctx.stroke();
        }
    }
};

const drawPlayer = (x, y) => { // sokoman on empty space
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.fillRect(sokoman.x, sokoman.y, sokoman.size, sokoman.size);
    // onKeyDown();
};

const drawBricks = (x, y) => { // wall
    for (let i = 0; i < bricks[currentLevel].length; i++) {
        let brick = bricks[currentLevel][i];
        ctx.beginPath();
        ctx.rect(brick.x, brick.y, 50, 50);
        ctx.fillRect(brick.x, brick.y, brick.size, brick.size);
        ctx.lineWidth = 4;
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.stroke();
    }
};

const drawCrates = (x, y) => { // crate
    for (let i = 0; i < crates[currentLevel].length; i++) {
        let crate = crates[currentLevel][i];
        ctx.beginPath();
        ctx.rect(crate.x, crate.y, 50, 50);
        ctx.fillRect(crate.x, crate.y, crate.size, crate.size);
        ctx.lineWidth = 4;
        ctx.fillStyle = "cyan";
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.stroke();
    }
};

const drawAllGoals = (x, y) => { // goal without box
    for (let i = 0; i < goals[currentLevel].length; i++) {
        let goal = goals[currentLevel][i];
        ctx.beginPath();
        ctx.rect(goal.x, goal.y, 50, 50);
        ctx.fillRect(goal.x, goal.y, goal.size, goal.size);
        ctx.lineWidth = 4;
        ctx.fillStyle = 'lime';
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.stroke();
    }
};

const checkWin = () => {

    var placedCrates = 0;

    for (let i = 0; i < crates[currentLevel].length; i++) {


        let crate = crates[currentLevel][i];
        let goal = goals[currentLevel][i];

        if (sokoman.y == goal.y && sokoman.x == goal.x) {
            drawPlayer();
        }

        for (let i = 0; i < goals[currentLevel].length; i++) {
            let goal = goals[currentLevel][i];
            let pointsToWin = goals[currentLevel].length;
            if (goal.row == crate.row && crate.col == goal.col) {
                ctx.beginPath();
                ctx.rect(goal.x, goal.y, 50, 50);
                ctx.fillRect(goal.x, goal.y, goal.size, goal.size);
                ctx.lineWidth = 4;
                ctx.fillStyle = "#DF00FF";
                ctx.fill();
                ctx.strokeStyle = 'black';
                ctx.stroke();
                placedCrates += 1;
                console.log(placedCrates);
                // return;
            }
            if (pointsToWin === placedCrates) {
                console.log("You Win!!");
                // winFunction();
            }
        }
    }
};

function winFunction() {
    var x = document.getElementById("myP").innerHTML;
    document.getElementById("demo").innerHTML = x;
}

// clock ticks
const step = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBoard();
    drawPlayer();
    updatePlayerPosition();
    drawBricks();
    updateAllBrickPositions();
    drawCrates();
    updateAllCratesPositions();
    drawAllGoals();
    updateAllGoalPositions();
    checkWin();
    window.requestAnimationFrame(step);
};

const moveUp = (event) => {
    let newPlayerRow = sokoman.row - 1;
    let crateRow = 0;

    // keep player on board
    if (newPlayerRow < 0) {
        console.log("can't do it captain.");
        return;
    }

    // is there is a brick in the row above 
    for (let i = 0; i < bricks[currentLevel].length; i++) {
        let brick = bricks[currentLevel][i];
        if (newPlayerRow == brick.row && sokoman.col == brick.col) {
            console.log("contactUp");
            console.log(brick);
            newPlayerRow = false;
            return;
        }
    }
    // is there a crate above my player?
    for (let i = 0; i < crates[currentLevel].length; i++) {
        let brick = bricks[currentLevel][i];
        let crate = crates[currentLevel][i];
        console.log(crate);
        let crateTrack = 1;
        let newCrateRow = crate.row - 1;

        // if no, move up 
        if (newPlayerRow == crate.row && sokoman.col == crate.col) {
            crate.row = newCrateRow;

            // if the board boundary is there, can't move
            if (newCrateRow < 0) {
                console.log("nope")
                return;
            }

            // if the brick is there, can't move
            if (newCrateRow == brick.row && crate.col == brick.col) {
                console.log("brickAbove");
                return;
            }
            console.log("pushUp");
            for (let i = 0; i < crates[currentLevel].length; i++) {
                let crate = crates[currentLevel];
                if (crate.length > 0) {
                    if (crate[0].row == crate[1].row && crate[0].col == crate[1].col) {
                        console.log("crate left of crate");
                        return;
                    }

                }
            }
            crate.y = crate.y - crate.size;
        }
    }
    console.log("Up");
    sokoman.row = newPlayerRow;
    sokoman.y = sokoman.y - sokoman.size;
};

const moveDown = (event) => {
    // don't let the player go off the board
    let newPlayerRow = sokoman.row + 1;
    if (newPlayerRow > 8) {
        console.log("nope");
        return;
    }

    // check if brick is below player if yes don't move
    for (let i = 0; i < bricks[currentLevel].length; i++) {
        let brick = bricks[currentLevel][i];

        if (newPlayerRow == brick.row && sokoman.col == brick.col) {
            console.log("contactDown");
            newPlayerRow = false;
            return;
        }

        // check crates
        for (let i = 0; i < crates[currentLevel].length; i++) {
            let crate = crates[currentLevel][i];
            let newCrateRow = crate.row + 1;

            // if there is a crate below me:
            if (newCrateRow > 8) {
                console.log("nope")
                return;
            }
            if (newPlayerRow == crate.row && sokoman.col == crate.col) {
                console.log("pushDown");
                crate.row = newCrateRow;

                // check if there is an obstacle between the brick and player
                if (newCrateRow == brick.row && crate.col == brick.col) {
                    console.log("brickBelow");
                    return;
                }

                for (let i = 0; i < crates[currentLevel].length; i++) {
                    let crate = crates[currentLevel];
                    if (crate.length > 0) {
                        if (crate[0].row == crate[1].row && crate[0].col == crate[1].col) {
                            console.log("crate left of crate");
                            return;
                        }
                    }
                }
                crate.y = crate.y + crate.size;
            }
        }
    }

    console.log("Down");
    sokoman.row = newPlayerRow;
    sokoman.y = sokoman.y + sokoman.size;
};

const moveLeft = (event) => {
    // don't let the player go off the board
    let newPlayerCol = sokoman.col - 1;
    if (newPlayerCol < 0) {
        console.log("nope");
        return;
    }

    // check if there's a brick next to you
    for (let i = 0; i < bricks[currentLevel].length; i++) {
        let brick = bricks[currentLevel][i];
        if (newPlayerCol == brick.col && sokoman.row == brick.row) {
            console.log("contactLeft");
            return;
        }
        for (let i = 0; i < crates[currentLevel].length; i++) {
            let crate = crates[currentLevel][i];
            let newCrateCol = crate.col - 1;

            // move crate left
            if (newPlayerCol == crate.col && sokoman.row == crate.row) {
                console.log("pushLeft");
                crate.col = newCrateCol;
                if (newCrateCol < 0) {
                    console.log("nope")
                    return;
                }
                if (newCrateCol == brick.col && crate.row == brick.row) {
                    console.log("brickLeft");
                    return;
                }
                for (let i = 0; i < crates[currentLevel].length; i++) {
                    let crate = crates[currentLevel];
                    if (crate.length > 0) {
                        if (crate[0].row == crate[1].row && crate[0].col == crate[1].col) {
                            console.log("crate left of crate");
                            return;
                        }
                    }
                }
                crate.x = crate.x - crate.size;
            }
        }
    }
    console.log("Left");
    sokoman.col = newPlayerCol;
    sokoman.x = sokoman.x - sokoman.size;
};

const moveRight = (event) => {
    // don't let the player go off the board
    let newPlayerCol = sokoman.col + 1;
    if (newPlayerCol > 8) {
        console.log("nope");
        return;
    }
    // is there is a brick in the row above 
    for (let i = 0; i < bricks[currentLevel].length; i++) {
        let brick = bricks[currentLevel][i];
        if (newPlayerCol == brick.col && sokoman.row == brick.row) {
            console.log("contactRight");
            return;
        }

        for (let i = 0; i < crates[currentLevel].length; i++) {
            let crate = crates[currentLevel][i];
            let newCrateCol = crate.col + 1;
            if (newPlayerCol == crate.col && sokoman.row == crate.row) {
                crate.col = newCrateCol;
                if (newCrateCol > 8) {
                    console.log("nope")
                    return;
                }
                if (newCrateCol == brick.col && crate.row == brick.row) {
                    console.log("brickRight");
                    return;
                }
                for (let i = 0; i < crates[currentLevel].length; i++) {
                    let crate = crates[currentLevel];
                    if (crate.length > 0) {
                        if (crate[0].row == crate[1].row && crate[0].col == crate[1].col) {
                            console.log("crate right of crate");
                            return;
                        }
                    }
                }
                crate.x = crate.x + crate.size;
            }
        }
    }
    console.log("Right");
    sokoman.col = newPlayerCol;
    sokoman.x = sokoman.x + sokoman.size;
};

const onKeyDown = (event) => {
    let key = event.key;
    if (key === "ArrowUp") {
        moveUp();
    }
    if (key === "ArrowDown") {
        moveDown();
    }
    if (key === "ArrowRight") {
        moveRight();
    }
    if (key === "ArrowLeft") {
        moveLeft();
    }
};

const onResize = (event) => {
    canvas.width = sokoman.size * 11;
    canvas.height = sokoman.size * 11;
};

const debounce = (func) => {
    let timerID;

    return (event) => {
        if (timerID) {
            clearTimeout(timerID);
        }

        timerID = setTimeout(func, 100, event);
    };
};

window.requestAnimationFrame(step);
window.addEventListener("load", onResize);
document.addEventListener("keydown", onKeyDown);
window.addEventListener("resize", debounce(onResize));