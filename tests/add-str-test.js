var expect = chai.expect;

describe('addStr function', function() {
  it('should add single digits separated by a comma', function() {
    expect(addStr('1,2')).to.equal(3);
    expect(addStr('1,4')).to.equal(5);
  });

  it('should add moar digits separated by a comma', function() {
    expect(addStr('100,4')).to.equal(104);
  });

  it('should add more than two numbers separated by commas', function() {
    expect(addStr('100,4,100')).to.equal(204);
    expect(addStr('100,4,100,100,4,100,100,4,100')).to.equal(612);
  });
});
