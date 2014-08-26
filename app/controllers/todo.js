import Ember from 'ember';

export default Ember.ObjectController.extend({
    isEditing: false,
    bufferTitle: '',

    isCompleted: function (key, value) {
        var model = this.get('content');

        if (value === undefined) {
            return model.get('isCompleted');
        } else {
            model.set('isCompleted', value);
            model.save();

            return value;
        }
    }.property('content.isCompleted'),

    actions: {
        editTodo: function () {
            this.set('bufferTitle', this.get('title'));
            this.set('isEditing', true);
        },

        update: function () {
            this.set('isEditing', false);
            this.get('content').save();
        },

        destroy: function () {
            this.get('content').destroyRecord();
        },

        cancel: function () {
            this.set('title', this.get('bufferTitle'));
            this.set('isEditing', false);
        }
    }
});
