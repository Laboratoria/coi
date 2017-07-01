describe('murderDog()', () => {

  it('debería ser una función', () => {

    Assert.equal(typeof Submission.murderDog, 'function');
  });

  it('debería retornar un objeto con bark, poop y kill', () => {

    const obj = Submission.murderDog();
    Assert.deepEqual(Object.keys(obj), ['bark', 'poop', 'kill']);
    Assert.equal(typeof obj.bark, 'function');
    Assert.equal(typeof obj.poop, 'function');
    Assert.equal(typeof obj.kill, 'function');
  });
});
