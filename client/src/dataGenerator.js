export function generateRandVal(min_val, max_val) {
  return ((Math.random() + Math.random() + Math.random())/3) * (max_val - min_val) + min_val;
}

export function decreaseValue(value) {
  var maxVal = 0.05;
  var minVal = 0.001;
  var x = ((Math.random() + Math.random() + Math.random())/3) * (maxVal - minVal) + minVal;
  return (value - x);
}

export function decreaseSystolic(maxValue) {
  if (maxValue == 115) {
    return 115
  } else {
    return (maxValue - 0.01);
  }
}

export function increaseDiastolic(minValue) {
  if (minValue == 70) {
    return 70
  }
  else {
    return (minValue + 0.01);
   }
}