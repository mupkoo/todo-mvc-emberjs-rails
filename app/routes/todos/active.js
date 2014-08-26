import TodosIndexRoute from './index';

export default TodosIndexRoute.extend({
    model: function () {
        return this.store.filter('todo', { isCompleted: false }, function (todo) {
            return !todo.get('isCompleted');
        });
    }
});
