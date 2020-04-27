export function decreaseSystolic(maxValue) {

  if (maxValue == 115) {
    return 115
  } else {
    return (maxValue - 0.01);
  }

}