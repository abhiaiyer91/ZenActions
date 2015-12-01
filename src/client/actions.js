/**
 * Create an Action Creator
 * @param mixins [] An array of mixin keys to attach to the object during construction
 * @constructor
 */
ZenAction = class ActionCreator {
  constructor(mixins) {
    // check if the mixin array is an array of strings
    Match.Optional([String]);
    if (_.isEmpty(mixins)) {
      return;
    }
    //iterate through the mixins
    _.each(mixins, (item) => {
    // grab the item from the mixin and attach to the object
      if (!ActionMixins[item]) {
        throw new Meteor.Error(400, 'ERROR: No Mixin with this name');
      }
      _.extend(this, ActionMixins[item]);
    })
  }
};

ZenMixins = class ActionMixins {
  registerMixin(name, object) {
    if (!_.isUndefined(this[name])) {
      throw new Meteor.Error(400, 'A Mixin with this name has already been registered');
    }
    return this[name] = object;
  }
};
