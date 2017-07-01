describe('murderRobotDog()', () => {

  it('debería ser una función', () => {

    Assert.equal(typeof Submission.murderRobotDog, 'function');
  });

  it('debería retornar un objeto con bark, drive y kill', () => {

    const obj = Submission.murderRobotDog();
    Assert.deepEqual(Object.keys(obj), ['bark', 'drive', 'kill']);
    Assert.equal(typeof obj.bark, 'function');
    Assert.equal(typeof obj.drive, 'function');
    Assert.equal(typeof obj.kill, 'function');
  });
});
