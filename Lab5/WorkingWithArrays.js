let todos = [
  { id: 1, title: "Buy milk", completed: false },
  { id: 2, title: "Feed the pets", completed: true },
  { id: 3, title: "Walk the dog", completed: false },
];

export default function WorkingWithArrays(app) {
  app.get("/lab5/todos", (req, res) => {
    res.json(todos);
  });

  // MOVE CREATE BEFORE :id ROUTE
  app.get("/lab5/todos/create", (req, res) => {
    const newTodo = {
      id: new Date().getTime(),
      title: "New Task",
      completed: false,
    };
    todos.push(newTodo);
    res.json(todos);
  });

  app.get("/lab5/todos/:id", (req, res) => {
    const { id } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    res.json(todo);
  });

  app.get("/lab5/todos/:id/delete", (req, res) => {
    const { id } = req.params;
    todos = todos.filter((t) => t.id !== parseInt(id));
    res.json(todos);
  });

  app.get("/lab5/todos/:id/title/:title", (req, res) => {
    const { id, title } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    todo.title = title;
    res.json(todo);
  });

  app.post("/lab5/todos", (req, res) => {
    const newTodo = {
      id: new Date().getTime(),
      title: req.body.title,
      completed: false,
    };
    todos.push(newTodo);
    res.json(newTodo);
  });

  app.delete("/lab5/todos/:id", (req, res) => {
    const { id } = req.params;
    todos = todos.filter((t) => t.id !== parseInt(id));
    res.json(todos);
  });

  app.put("/lab5/todos/:id", (req, res) => {
    const { id } = req.params;
    todos = todos.map((t) =>
      t.id === parseInt(id) ? { ...t, ...req.body } : t
    );
    const todo = todos.find((t) => t.id === parseInt(id));
    res.json(todo);
  });
  app.get("/lab5/todos/:id/completed/:completed", (req, res) => {
    const { id, completed } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    if (todo) {
      todo.completed = completed === "true";
    }
    res.json(todos);
  });

  app.get("/lab5/todos/:id/description/:description", (req, res) => {
    const { id, description } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    if (todo) {
      todo.description = description;
    }
    res.json(todos);
  });
}
