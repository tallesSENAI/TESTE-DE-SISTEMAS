const soma = require("./sum");//chama o código 'sum' para este código

test("Somar dois números", () => {
    expect(soma(1,2)).toBe(3);
});
