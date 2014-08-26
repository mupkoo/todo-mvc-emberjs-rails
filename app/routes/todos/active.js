import TodosIndexRoute from './index';

console.log(TodosIndexRoute);

export default TodosIndexRoute.extend({
    model: function () {
        return this.store.filter('todo', { isComplete: false });
    }
});
