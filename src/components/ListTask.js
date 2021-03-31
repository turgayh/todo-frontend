function Todo({ todo }) {
    return (
        <div className="todo">
            {todo.description}
        </div>
    );
};

function ListTask({ tasks }) {
    return (
        <div name='todo-list' className="todo-list">
            {tasks.map((todo, index) => (
                <Todo
                    key={index}
                    index={todo.id}
                    todo={todo}
                />
            ))}
        </div>
    )
}

export default ListTask;
