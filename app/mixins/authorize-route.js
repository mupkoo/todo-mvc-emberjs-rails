import Ember from 'ember';

export default Ember.Mixin.create({

    beforeModel: function () {
        if (!this.controllerFor('currentUser').get('isSignedIn')) {
            this.redirectToLogin();
        }
    },

    redirectToLogin: function () {
        this.controllerFor('login').set('errorMessage', 'Please login before you can continue.');
        this.transitionTo('login');
    },

    actions: {
        // Arguments - error, transition
        error: function (error) {
            if (error && error.status === 401) {
                this.redirectToLogin();
            }

            // Let the event bubble
            return true;
        }
    }

});
