/**
 * Mixins namespace to mix into our action creation methods
 * Registers a mixin by name and object containing
 * methods to mixins (functions).
 * @type {{}}
 */
ZenMixins = {
  registerMixin(name, object) {
    if (!_.isUndefined(this[name])) {
      throw new Meteor.Error(400,
        'A Mixin with this name has already been registered');
    }
    this[name] = object;
    return;
  }
};


/**
 * Create an Action Creator
 * @param mixins [] An array of mixin keys to attach to the
 * object during construction
 * @constructor
 */
ZenAction = function ZenAction(...mixins) {
  // check if the mixin array is an array of strings
  check(mixins, Match.Optional([String]));

  if (_.isEmpty(mixins)) {
    return;
  }

  let zenMixins = {};

  _.each(mixins,(mixin) => {
    if (!ZenMixins[mixin]) {
      throw new Meteor.Error(400, 'ERROR: No Mixin with this name');
    }
    _.extend(zenMixins, ZenMixins[mixin]);
  });

  return zenMixins;
};

