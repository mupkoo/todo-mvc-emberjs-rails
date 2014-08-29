import Ember from 'ember';

export default {
    name: 'current-user',
    after: 'store',

    initialize: function(container, app) {
        var login = container.lookup('controller:login'),
            currentUser = container.lookup('controller:currentUser'),
            token = login.get('token');

        app.deferReadiness();

        if (token) {
            Ember.$.get(TodoMvcENV.api + 'api/users/' + token + '.json').then(function (res) {
                if (res.success) {
                    currentUser.set('content', res.user);
                }

                app.advanceReadiness();
            }, function () { // Error handler
                app.advanceReadiness();
            });
        } else {
            app.advanceReadiness();
        }
    }
};
