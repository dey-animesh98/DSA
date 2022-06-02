// Trapping rain water

// height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

let trap = function (height) {
    if (!(height && height.length)) return;
    let [n, left, right, water] = [height.length, [], [], 0];
    left[0] = height[0]; // cannot fill in the 1 building, can only fill between the buildings

    for (let i = 1; i < n; i++) {
        left[i] = Math.max(left[i - 1], height[i]);
    }
    right[n - 1] = height[n - 1]; // cannot fill in the 1 building, can only fill between the buildings
    for (let i = n - 2; i >= 0; i--) {
        right[i] = Math.max(right[i + 1], height[i]);
    }

    for (let i = 1; i < n - 1; i++) {
        water += Math.min(left[i], right[i]) - height[i];
    }
    return water;
};

