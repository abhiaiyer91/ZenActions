describe('ActionMixins', function () {
  beforeEach(function () {
    spyOn(Meteor, 'Error');
  });

  it('should be an object', function () {
    console.log(ZenMixins, _.isObject(ZenMixins));
    expect(_.isObject(ZenMixins)).toBe(true);
  });

  it('should add the method to the namespace', function () {
    ZenMixins.registerMixin('bye', {
      world: 'hi'
    });
    expect(!_.isUndefined(ZenMixins.bye)).not.toBe(false);
  });
});
