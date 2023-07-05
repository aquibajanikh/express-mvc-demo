const express = require('express');
const todoController = require('./controllers/todoController');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({ extended: true }));

app.get('/', todoController.getAllTodos);
app.get('/create', todoController.createTodoForm);
app.post('/create', todoController.createTodoItem);
app.get('/complete/:id', todoController.completeTodoItem);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
