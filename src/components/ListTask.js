function Todo({ todo }) {
    return (
        <div className="todo">
            {todo.description}
        </div>
    );
};

function ListTask({ tasks }) {
    return (
        <div className="todo-list">
            {tasks.map((todo) => (
                <Todo
                    key={todo.id}
                    index={todo.id}
                    todo={todo}
                />
            ))}
        </div>
    )
}

export default ListTask;
