describe('Action Creation', function () {
  let ActionCreator;
  beforeEach(function () {
    spyOn(Meteor, 'Error');
    ActionCreator = new ZenAction();
  });
  it('should be an object', function () {
    expect(_.isObject(ActionCreator)).toBe(true);
  });
  it('should have the injected mixin', function () {
    ZenMixins.registerMixin('helloWorld', {
      'hello': function () {
        return 'world';
      }
    });
    var ActionCreatorWithMixin = new ZenAction(['helloWorld']);
    expect(_.isUndefined(ActionCreatorWithMixin.hello)).toBe(false);
  });
  it ('should throw if called with a mixin that doesn\t exists', function () {
    expect(_.partial(ZenAction, ['hello'])).toThrow();
  });
});
