import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return this.store.find('todo');
    },

    renderTemplate: function (controller) {
        this.render('todos/index', {
            controller: controller
        });
    }
});
