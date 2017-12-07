import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel()
  {
    "use strict";
    return this._super();
  },
  model()
  {
    "use strict";
  },

});
