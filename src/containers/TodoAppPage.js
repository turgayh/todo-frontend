import { useState } from 'react'
import { ListTask } from '../components';
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


export default function TodoAppPage() {
    const [listOfTask, setlistOfTask] = useState([])

    const addTodo = text => {
        const newTodos = [...listOfTask, { text }];
        setlistOfTask(newTodos);
    };


    return (
        <div>
            <TodoForm addTodo={addTodo} />
            <ListTask tasks={listOfTask} />
        </div>
    )
}
