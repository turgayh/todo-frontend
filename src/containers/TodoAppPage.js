
import { useState, useEffect } from 'react'
import { ListTask } from '../components';
import Task from '../model/task';
import TaskService from '../service/task.service';

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

    const service = new TaskService("https://todo-backend-bhl6p.ondigitalocean.app", '');;

    const addTodo = text => {
        const newTask = new Task(null, text, null);
        service.createTask(newTask).then((res) => {
            const newTodos = [...listOfTask, { id: res.data.id, description: res.data.description }];
            setlistOfTask(newTodos);
        });
    };

    useEffect(() => {
        service.getAll().then((res) => {
            setlistOfTask(res.data)
        });
    }, []);


    return (
        <div>
            <TodoForm addTodo={addTodo} />
            <ListTask tasks={listOfTask} />
        </div>
    )
}
