export function generateRandVal(min_val, max_val) {
  return ((Math.random() + Math.random() + Math.random())/3) * (max_val - min_val) + min_val;
}