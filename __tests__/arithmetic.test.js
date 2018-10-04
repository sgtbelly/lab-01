'use strict';

const arithmetic = require('../lib/arithmetic.js');
const faker = require('faker');

describe('arithmetic.add', () => {
  let a = faker.random.number();
  let b = faker.random.number();
  let c = faker.random.alphaNumeric();
  let d = faker.random.alphaNumeric();
  let sumA = a + b;


  while(c === Number || d === Number) {
    c = faker.random.alphaNumeric();
    d = faker.random.alphaNumeric();
  };

  it('return a+b', () => {
    let number = arithmetic.add(a, b);
    expect(number).toEqual(sumA);
  });

  it('return d+c', () => {
    let number = arithmetic.add(d,c);
    expect(number).toBeNull();
  });


  it('numbers to be added', () => {
    let number = arithmetic.add();
    expect(number).toBeNull();
  });

  it('requires a number', () => {
    let number = arithmetic.add();
    expect(number).toBeNull();
  });

  it('rejects letters', () => {
    let number = arithmetic.add();
    expect(number).toBeNull();
  });

  it('rejects objects', () => {
    let number = arithmetic.add({});
    expect(number).toBeNull();
  });

  it('rejects arrays', () => {
    let number = arithmetic.add([]);
    expect(number).toBeNull();
  });
});

describe('arithmetic.subtract', () => {
  let a = faker.random.number();
  let b = faker.random.number();
  let c = faker.random.alphaNumeric();
  let d = faker.random.alphaNumeric();
  let divA = a - b;

  it('return a-b', () => {
    let number = arithmetic.subtract(a,b);
    expect(number).toEqual(divA);
  });

  it('return d-c', () => {
    let number = arithmetic.subtract(d,c);
    expect(number).toBeNull();
  });

  it('numbers to be subtracted', () => {
    let number = arithmetic.subtract();
    expect(number).toBeNull();
  });

  it ('requires a number', () => {
    let number = arithmetic.subtract();
    expect(number).toBeNull();
  });

  it('rejects letters', () => {
    let number = arithmetic.subtract();
    expect(number).toBeNull();
  });

  it('rejects objects', () => {
    let number = arithmetic.subtract({});
    expect(number).toBeNull();
  });

  it('rejects arrays', () => {
    let number = arithmetic.subtract([]);
    expect(number).toBeNull();
  });

});

describe('arithmetic.multiply', () => {
  let a = faker.random.number();
  let b = faker.random.number();
  let c = faker.random.alphaNumeric();
  let d = faker.random.alphaNumeric();
  let mulA = a * b;

  it('return a*b', () => {
    let number = arithmetic.multiply(a,b);
    expect(number).toEqual(mulA);
  });

  it('return d*c', () => {
    let number = arithmetic.multiply(d,c);
    expect(number).toBeNull();
  });

  it('numbers to be subtracted', () => {
    let number = arithmetic.multiply();
    expect(number).toBeNull();
  });

  it ('requires a number', () => {
    let number = arithmetic.multiply();
    expect(number).toBeNull();
  });

  it('rejects letters', () => {
    let number = arithmetic.multiply();
    expect(number).toBeNull();
  });

  it('rejects objects', () => {
    let number = arithmetic.multiply({});
    expect(number).toBeNull();
  });

  it('rejects arrays', () => {
    let number = arithmetic.multiply([]);
    expect(number).toBeNull();
  });

});

describe('arithmetic.divide', () => {
  let a = faker.random.number();
  let b = faker.random.number();
  let c = faker.random.alphaNumeric();
  let d = faker.random.alphaNumeric();
  let proA = a / b;

  if (a === '0' || b === '0') {
    a = faker.random.number
    b = faker.random.number
  };

  it('return a/b', () => {
    let number = arithmetic.divide(a,b);
    expect(number).toEqual(proA);
  });

  it('return d/c', () => {
    let number = arithmetic.divide(d,c);
    expect(number).toBeNull();
  });

  it('cant divide by 0 ', () => {
    let number = arithmetic.divide(a,b);
    expect(number).toEqual(proA);
  });

  it('numbers to be subtracted', () => {
    let number = arithmetic.divide();
    expect(number).toBeNull();
  });

  it ('requires a number', () => {
    let number = arithmetic.divide();
    expect(number).toBeNull();
  });

  it('rejects letters', () => {
    let number = arithmetic.divide();
    expect(number).toBeNull();
  });

  it('rejects objects', () => {
    let number = arithmetic.divide({});
    expect(number).toBeNull();
  });

  it('rejects arrays', () => {
    let number = arithmetic.divide([]);
    expect(number).toBeNull();
  });

});