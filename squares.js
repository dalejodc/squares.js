let dotsInRow = 0;
let dotsInColumn = 0;
let squares = 0;

/**
 * This function print the number of calculated squares
 */
function printNumberOfSquares() {
    console.log("\n")
    console.log("=============================")
    console.log(`Total squares: ${squares}`);
    console.log("=============================")
}

/**
 * This function determine if a point in a column has n extra espaces
 * @param int index 
 * @return boolean
 */
function hasDown(index)
{
    return (index < dotsInColumn) ? true : false;
};

/**
 * This function determine if a point in a row has n extra espaces
 * @param int index 
 * @return boolean
 */
function hasLeft(index)
{
    return (index >= 0) ? true : false;
};

/**
 * This function determine if a point in a row has n extra espaces
 * @param int index 
 * @return boolean
 */
function hasRight(index)
{
    return (index < dotsInRow) ? true : false;
};

/**
 * This function calculates the number of squares.
 */
function calculateSquares(a, b)
{
    dotsInRow = a;
    dotsInColumn = b;

    for (x = 0; x < dotsInRow; x++) {
        for (y = 0; y < dotsInColumn; y++) {
            for (space = 1; space < dotsInColumn; space++) {
                // Regular squares
                if (hasDown(y + space) && hasRight(x + space)) {
                    // console.log(`Dot in position (${x},${y}) has ${space} spaces to the right? ${hasDown(x+space)}. Has ${space} spaces down?: ${hasRight(y+space)}`);
                    squares++;  
                }
                
                // Diamonds
                if (hasLeft(x - space) && hasDown(y + (2*space)) && hasRight(x + space)) {
                    // console.log(`Top of the diamon found at: (${x}, ${y})`);
                    squares++;
                }

                // Rotated square
                if (hasDown(y + (3*space)) && hasRight(x + (2*space)) && hasLeft(x - space)) {
                    // console.log(`Top of the rotated square found at: (${x}, ${y})`);
                    squares++;
                }

                // Rotated square
                if (hasDown(y + (3*space)) && hasRight(x + (2*space)) && hasLeft(x - space)) {
                    // console.log(`Top of the rotated squarse found at: (${x}, ${y})`);
                    squares++;
                }
            }
        }
    }
}

calculateSquares(3, 3);

printNumberOfSquares();

