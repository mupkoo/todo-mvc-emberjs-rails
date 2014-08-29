import Ember from 'ember';
import AuthorizeRouteMixin from '../mixins/authorize-route';

export default Ember.Route.extend(
    AuthorizeRouteMixin, {

    model: function () {
        return this.store.find('todo');
    }
});
