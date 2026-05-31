export default {
	init () {
		data.todos = appsmith.store.todos || data.dummyTodos;
	},
	updateTodo (id, update) {
		data.todos [id] = {...data.todos [id], ...update};
		storeValue('todos', data.todos);
	},
	addTodo (title) {
		this.updateTodo (data. todos. length, {title, completed: false}) ;
	},
	deleteTodo (id) {
		data.todos.splice(id, 1);
		storeValue('todos', data.todos);
	},
	setActiveTodo(id) {
		console.log("setActiveTodo");
		data.activeTodo = id;
	},
	editTodo (id, title) {
		this.updateTodo(id, {title});
		data.activeTodo = -1;
	}
}