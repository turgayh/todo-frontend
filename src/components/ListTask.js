function Todo({ todo }) {
    return (
        <div className="todo">
            {todo.text}
        </div>
    );
};

function ListTask({ tasks }) {
    return (
        <div className="todo-list">
            {tasks.map((todo, index) => (
                <Todo
                    key={index}
                    index={index}
                    todo={todo}
                />
            ))}
        </div>
    )
}

export default ListTask;
