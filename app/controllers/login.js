import Ember from 'ember';

export default Ember.ObjectController.extend({

    // Initial data
    model: {
       token: localStorage.token,

       email: '',
       password: '',
       errorMessage: null
    },


    observeToken: function () {
        localStorage.token = this.get('token');
    }.observes('token'),

    resetErrorMessage: function () {
        this.set('errorMessage', null);
    }.observes('email', 'password'),

    actions: {
        login: function () {
            var self = this,
                data = { auth: this.getProperties('email', 'password') };

            if (data.auth.email.trim() === '' || data.auth.password.trim() === '') {
                this.set('errorMessage', 'Please, enter your email and password!');
            } else {
                Ember.$.post(TodoMvcENV.api + 'api/auth.json', data).then(function (res) {
                    if (res.success) {

                        self.set('token', res.token);
                        // self.controllerFor('currentUser').set('content', res.user);

                        self.transitionToRoute('todos');

                    } else {
                        self.set('errorMessage', res.error || 'Cannot login with this email/password combination');
                    }
                });
            }
        }
    }
});
