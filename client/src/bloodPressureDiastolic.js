export function increaseDiastolic(minValue) {

  if (minValue == 70) {
    return 70
  }
  else {
    return (minValue + 0.01);
   }

}