import { useState } from 'react'
import "./App.css"

function Todo({ todo }) {
  return (
    <div className="todo">
      {todo.text}
    </div>
  );
};

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div className="input-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          name="input-task"
          onChange={e => setValue(e.target.value)}
        />
        <button type='submit' name="button-add-task">Add</button>
      </form>
    </div>
  );
}


function App() {
  const [listOfTask, setlistOfTask] = useState([])

  const addTodo = text => {
    const newTodos = [...listOfTask, { text }];
    setlistOfTask(newTodos);
  };



  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />

      <div className="todo-list">
        {listOfTask.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
