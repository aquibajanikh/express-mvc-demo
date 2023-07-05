const Todo = require('../models/todoModel');

// In-memory storage for todos (replace with a database in production)
const todos = [];

const todoController = {
  getAllTodos(req, res) {
    res.render('index', { todos });
  },

  createTodoForm(req, res) {
    res.render('create');
  },

  createTodoItem(req, res) {
    const { title } = req.body;
    const todo = new Todo();
    todo.id = todos.length + 1;
    todo.title = title;
    todos.push(todo);
    res.redirect('/');
  },

  completeTodoItem(req, res) {
    const id = parseInt(req.params.id);
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = true;
    }
    res.redirect('/');
  }
};

module.exports = todoController;
