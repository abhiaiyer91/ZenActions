# Zen Actions

A simple, yet powerful tool to reuse business logic in the view layer.

`ZenActions` is the first of 2 packages to help build your Meteor app in a "Flux"-like manner. `ZenActions` allow you to 
abstract business logic from your views into digestable chunks to use between `Blaze` Templates or `React` Components.

## Table of Contents

* [Getting Started](#getting-started)
* [Mixins](#mixins)
* [Actions] (#actions)

### Getting Started

Add Zen Actions to your app:

```shell
meteor add zenflux:zen-actions
```
### Mixins

`ZenActions` are powered by the concept of mixins. What is a mixin? A mixin is a plain object in which its values are functions
(ideally, [pure functions](https://en.wikipedia.org/wiki/Pure_function) but is also great for state mutations)

Let's look at how we register mixins.

#### ZenMixins.registerMixin(name, object)
Register a function the Mixin namespace

```js
// We want to share functionality between 2 views. For this example, let's say 
// we need to share a function that creates a post in forum
ZenMixins.registerMixin('createPostMixin', {
  // a function that calls submitPost meteor methods and handles some side effects
  createPost(postData, postState, callback) {
     return Meteor.call('submitPost', postData, function (e, r) {
       if (!e) {
          // we passed some reactive var from our view to set some flag after our method has been called 
          postState.set(true);
          // some callback function
          if (_.isFunction(callback) {
            return callback();
          }
       }
     }
  },
  // We want to have a function to toggle the post box on and off
  togglePostBox(postVisibilityStore) {
    return postVisibilityStore.set(true);
  }
});
```

Awesome! Now I have a reusable piece of code to use between any views that need this functionality. As you can see, all we need to 
use this mixin is some `postData` (which can come from your views data) and some `reactive variable/dict/session `

Important Information:

* `Mixins` are really convenient in a package based architecture. This way you can assure that your mixin is registered before using it, and you can also control mixin dependencies between views.
 

### Actions (Using Mixins)

The way we utilize our actions is via a `ZenAction`

#### ZenAction([mixins])

A ZenAction is a class that takes registerd mixins and "mixes" them into its instance object. We then bind this object to the instance of our
Blaze Template or React Component.

### Blaze Example

Lets say we have the same create post example from the mixins section

Our markup would look something like this:

```handlebars
  <template name="postSubmitComponent">
    <textarea></textarea>
    <button class="ev-submit-post">Submit Post</button>
  </template>
```
