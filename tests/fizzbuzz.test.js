// FIZZBUZZ
// MULTIPLO DE 3, RETURN FIZZ -> 6 RETURN FIZZ
// MULTIPLO DE 5, RETURN BUZZ -> 10 RETURN BUZZ
// SI NO ES MULTIPLO NI DE 3 NI DE 5, DEVUELVE EL NUMERO -> 2 RETURN 2
// MULTIPLO DE 3 Y DE 5, RETURN FIZZBUZZ -> 15 RETURN FIZZBUZZ
// TODO EN MAYUSCULA

const fizzbuzz = require('../fizzbuzz');



test('3 IS FIZZ', () => {
    // ARRANGE
    const num = 3
    const expectedResult = 'FIZZ'

    // ACT
    const result = fizzbuzz(num)

    // ASSERT
    expect(result).toBe(expectedResult);
  });

test('5 IS BUZZ', () => {
    // ARRANGE
    const num = 5
    const expectedResult = 'BUZZ'

    // ACT
    const result = fizzbuzz(num) // <- SIEMPRE ESTÁ EL SUT, SUBJECT UNDER TEST

    // ASSERT
    expect(result).toBe(expectedResult)
  });

test('2 is 2', ()=>{
    // ARRANGE
    const num = 2
    const expectedResult = 2

    // ACT
    const result = fizzbuzz(num)

    // ASSERT
    expect(result).toBe(expectedResult)
})

test('15 is FIZZBUZZ', ()=>{
    // ARRANGE
    const num = 15
    const expectedResult = 'FIZZBUZZ'

    // ACT
    const result = fizzbuzz(num)

    // ASSERT
    expect(result).toBe(expectedResult)
})
  