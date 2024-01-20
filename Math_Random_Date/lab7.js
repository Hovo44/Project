let max = Math.max(123,345,54,12,6,2,88 );
let min = Math.min(123,345,54,12,6,2,88 );

const nums = [2,4,8];
let max2 = Math.max( nums[0], nums[1], 555, nums[2], 444 );

let[x, y, z ] = nums;
let max3 = Math.max(x, y, z);

const nums2 = [2,4,6,8];
console.log( Math.max(...nums) );

let now = new Date();
console.log(now);