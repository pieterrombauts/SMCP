import { generateRandVal, decreaseValue, decreaseSystolic, increaseDiastolic } from '../dataGenerator'

describe("Data generator file", () => {
  it('generates random value correctly', () => {
    var value = generateRandVal(20,30);
    expect(value).toBeGreaterThanOrEqual(20)
    expect(value).toBeLessThanOrEqual(30)
    value = generateRandVal(55,90);
    expect(value).toBeGreaterThanOrEqual(55)
    expect(value).toBeLessThanOrEqual(90)
    value = generateRandVal(2.5,3.5);
    expect(value).toBeGreaterThanOrEqual(2.5)
    expect(value).toBeLessThanOrEqual(3.5)
  })

  it('decreases value correctly', () => {
    var value = 50;
    var new_value = decreaseValue(value);
    expect(new_value).toBeLessThan(value)
    value = new_value;
    new_value = decreaseValue(value);
    expect(new_value).toBeLessThan(value)
    value = new_value;
    new_value = decreaseValue(value);
    expect(new_value).toBeLessThan(value)
  })

  it('decreases systolic value correctly', () => {
    var value = 120;
    var new_value = decreaseSystolic(value);
    expect(new_value.toFixed(2)).toBe('119.99')
    value = new_value;
    var new_value = decreaseSystolic(value);
    expect(new_value.toFixed(2)).toBe('119.98')
    value = 115;
    var new_value = decreaseSystolic(value);
    expect(new_value.toFixed(2)).toBe('115.00')
  })

  it('increases diastolic value correctly', () => {
    var value = 65;
    var new_value = increaseDiastolic(value);
    expect(new_value.toFixed(2)).toBe('65.01')
    value = new_value;
    var new_value = increaseDiastolic(value);
    expect(new_value.toFixed(2)).toBe('65.02')
    value = 70;
    var new_value = increaseDiastolic(value);
    expect(new_value.toFixed(2)).toBe('70.00')
  })
})