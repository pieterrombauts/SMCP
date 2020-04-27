export function decreaseValue(value) {

    var maxVal = 0.05;
    var minVal = 0.001;
    var x = ((Math.random() + Math.random() + Math.random())/3) * (maxVal - minVal) + minVal;
    return (value - x);
  }