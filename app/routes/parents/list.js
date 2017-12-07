import Route from '@ember/routing/route';
import Ember from 'ember';
import { v4 } from 'ember-uuid';

export default Route.extend({
  store: Ember.inject.service(),

  beforeModel()
  {
    "use strict";
    return this._super();
  },
  model()
  {
    "use strict";
     return this.get('store').peekAll('parent', {reload: true});
  },
  actions: {
    createParent() {
      this.get('store').createRecord('parent', {
        id: v4(),
        children: []
      });
      console.log("PARENT CREATED");
    }
  }
});
