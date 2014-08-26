import TodosIndexRoute from './index';

export default TodosIndexRoute.extend({
    model: function () {
        return this.store.filter('todo', { isCompleted: true }, function (todo) {
            return todo.get('isCompleted');
        });
    }
});
