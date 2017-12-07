import DS from 'ember-data';

export default DS.Model.extend({
  schedule: DS.belongsTo('parent', {inverse: 'children'}),
});
