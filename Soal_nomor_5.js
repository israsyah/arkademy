//Soal No 5
function diagonalSums(matrix) {
 
    let mainSum = 0, secondarySum = 0;
    for (let row = 0; row < matrix.length; row++) {
        mainSum += matrix[row][row];
        secondarySum += matrix[row][matrix.length - row - 1];
    }
    console.log(mainSum * secondarySum);
}
 
diagonalSums([[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]])