describe('murderRobot()', () => {

  it('debería ser una función', () => {

    Assert.equal(typeof Submission.murderRobot, 'function');
  });

  it('debería retornar un objeto con drive y kill', () => {

    const obj = Submission.murderRobot();
    Assert.deepEqual(Object.keys(obj), ['drive', 'kill']);
    Assert.equal(typeof obj.drive, 'function');
    Assert.equal(typeof obj.kill, 'function');
  });
});
