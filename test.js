// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("1.07 dollars should be 156.5 yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yens = fromDollarToYen(5);

    // Si 1.07 dolares son 156.5 yen, entonces 5 dolares debe ser (5 * 156.5)
    const expected = 5 * 156.5;

    // Hago mi comparación (la prueba)
    expect(yens).toBe(expected); // 1 dolar son 156.5 yen, entonces 5 dolares deberían ser = (5 * 156.5)
})

test("156.5 Yens should be 0.87 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYentoPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pounds = fromYentoPound(313);

    // Si 156.5 Yens son 0.87 pounds, entonces 313 Yens debe ser (313 * 0.87)
    const expected = 313 * 0.87;

    // Hago mi comparación (la prueba)
    expect(pounds).toBe(expected); // 156.5 yens son 0.87 pounds, entonces 313 yens deberían ser = (313 * 0.87)
})
