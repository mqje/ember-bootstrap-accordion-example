import Route from '@ember/routing/route';
import Ember from 'ember';
import { v4 } from "ember-uuid";

export default Route.extend({
  store: Ember.inject.service(),

  init() {
    this._super(...arguments);
  },
  model(params) {
    "use strict";
    return this.get('store').peekRecord('parent', params.parent_id);
  },
  resetController(controller, isExiting/*, transition*/)
  {
    // Rollback change when leaving the page.
    if (isExiting)
    {
      const mod = this.controller.get('model');
      if (mod)
        mod.rollbackAttributes();
    }
  },

  actions: {
    createChild() {
      let newChild = this.get('store').createRecord('child', {
        id: v4()
      });
      this.controller.get('model').get('children').addObject(newChild);
    }
  }
});
