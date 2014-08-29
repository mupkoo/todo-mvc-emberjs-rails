import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
    host: 'http://rails-api.dev',
    namespace: 'api'
});
