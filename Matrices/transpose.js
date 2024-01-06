export const transposeMatrix = (matrix) => {
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    // Create a new matrix with transposed dimensions
    const ans = Array.from({ length: cols }, () => Array(rows).fill(0));
    
    // Transpose the matrix
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            ans[j][i] = matrix[i][j];  // Transpose logic
        }
    }
    
    return ans;  // Return the transposed matrix
};

//for square matrices we can do inplace, For non-square matrices, you would need a new matrix because their dimensions change.

export const transposeMatrixInPlace = (matrix) => {
    const n = matrix.length;

    // Transpose in-place by swapping elements over the diagonal
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
        
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    return matrix;  // The matrix is now transposed in-place
};
