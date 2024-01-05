const perfectPeak = (A) =>{
    const N = A.length;
        if (N < 3) return 0; // We can't have a valid element if there are less than 3 elements
    
        const leftMax = new Array(N).fill(-Infinity);
        const rightMin = new Array(N).fill(Infinity);
    
        // Fill leftMax array
        for (let i = 1; i < N; i++) {
            leftMax[i] = Math.max(leftMax[i - 1], A[i - 1]);
        }
    
        // Fill rightMin array
        for (let i = N - 2; i >= 0; i--) {
            rightMin[i] = Math.min(rightMin[i + 1], A[i + 1]);
        }
    
        // Check for the required element
        for (let i = 1; i < N - 1; i++) {
            if (A[i] > leftMax[i] && A[i] < rightMin[i]) {
                return 1; // Found the element
            }
        }
    
        return 0; // No such element exists
    
        }