import Ember from 'ember';

export default Ember.ArrayController.extend({

    hasTodos: Ember.computed.notEmpty('content'),

    remainingCount: function () {
        return this.filterBy('isCompleted', false).get('length');
    }.property('@each.isCompleted'),

    inflection: function () {
        return this.get('remainingCount') === 1 ? 'todo' : 'todos';
    }.property('remainingCount'),

    completedCount: function () {
        return this.filterBy('isCompleted', true).get('length');
    }.property('@each.isCompleted'),

    hasCompleted: function () {
        return this.get('completedCount') > 0;
    }.property('completedCount'),

    allAreDone: function (key, value) {
        if (value === undefined) {
            return !!this.get('length') && this.everyProperty('isCompleted', true);
        } else {
            this.setEach('isCompleted', value);
            this.invoke('save');
            return value;
        }
    }.property('@each.isCompleted'),

    actions: {
        create: function () {
            var title = this.get('newTitle');

            if (!title.trim()) { return; }

            var todo = this.store.createRecord('todo', {
                title: title,
                isCompleted: false
            });

            this.set('newTitle', '');

            todo.save();
        },

        clearCompleted: function () {
            var completed = this.filterBy('isCompleted', true);
            completed.invoke('destroyRecord');
        }
    }
});
