import Ember from 'ember';

export default Ember.Route.extend({
    redirect: function () {
        this.controllerFor('login').send('logout');
        this.transitionTo('todos');
    }
});
