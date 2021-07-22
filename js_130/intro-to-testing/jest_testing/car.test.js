const Car = require('./car');

describe('The Car class', () => { // optional description to group tests
  let car;
  beforeEach(() => {
    car = new Car();
  });

  test('has four wheels', () => { // test
    // assertion, actual value passed to expect function
    // returns an object with a variety of matcher methods
    // to compare the actual value with the expected value
    // don't return anything meaninful, just inform Jest of the results
    expect(car.wheels).toBe(4);
  });

  xtest('bad wheels', () => {
    // test.skip('bad wheels', () => {
      expect(car.wheels).toBe(3);
    });

  test('two new cars are equal objects', () => {
    let car2 = new Car();
    expect(car).toEqual(car2);
  });

  test('does not have doors', () => {
    expect(car.doors).toBeUndefined(); // same as toBe(undefined)
  });

  test('raises an error when called drive on it', () => {
    // must wrap function invocation in a function,
    // otherwise calling it directly will raise an exception before toThrow gets an opportunity to detect it
    expect(() => car.drive()).toThrow();
  });

  test('raises a TypeError when called drive on it', () => {
    expect(() => car.drive()).toThrow(TypeError);
  });

  test('a new car has no mileage info', () => {
    expect(car.mileageInfo).toBeNull();
  });

  test('has truthy wheels', () => {
    expect(car.wheels).toBeTruthy();
  });

  test('array contains car', () => {
    let arr = [1, 2, 3];
    arr.push(car);
    expect(arr).toContain(car);
  });

  test('string contains "car"', () => {
    let man = "His scars have healed";
    expect(man).toContain("car");
  });

  test('has wheels', () => {
    expect(car.wheels).not.toBeUndefined();
  });


  }
);
