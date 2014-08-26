import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return this.modelFor('todos');
    },

    renderTemplate: function (controller) {
        this.render('todos/index', {
            controller: controller
        });
    }
});
