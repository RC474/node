let grades = [90, 98, 89, 100, 100, 86, 94];

function average(arr){
  let total = 0;
  for (let i = 0; i < arr.length; i++){
    total += arr[i];
    var avg = total / arr.length;
  }
  return Math.round(avg);
}

average(grades);

