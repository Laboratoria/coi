describe('createLogger()', () => {

  it('debería de ser una función', () => {

    Assert.equal(typeof Submission, 'function');
  });

  it('debería de retornar una función', () => {

    Assert.equal(typeof Submission(), 'function');
  });

  it('debería de retornar una función que imprime a la consola con el namespace', () => {

    const log = console.log;
    let called = 0;
    let output = '';

    console.log = (str) => {
      called++;
      output += str;
    };

    const warn = Submission('warning');
    warn('houston, we have a problem');

    Assert.equal(called, 1);
    Assert.equal(output, '[warning]: houston, we have a problem');

    console.log = log;
  });

});
