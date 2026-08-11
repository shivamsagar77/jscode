let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

let left = 0;
let right = 5;
let target = 12;

while (left < right) {
  let mid = Math.floor((left + right) / 2);
  if (nums[mid] < target) {
    left = mid;
    right = right * 2;
  } else if (nums[mid] > target) {
    break;
  }
}

while (left < right) {
  let mid = Math.floor((left + right) / 2);

  if (nums[mid] < target) {
    left = mid;
  } else if (nums[mid] > target) {
    right = mid;
  } else if (nums[mid] === target) {
    console.log(mid);
    break;
  }
}
