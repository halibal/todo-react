
export default function FormStatus(props) {

    const uncompletedItems = props.todos.filter(({ completed }) => completed === false)
    const completedItems = props.todos.filter(({ completed }) => completed === true)


    return (
        <div className='status-container'>
            <p className='completed-items-text'>
                {uncompletedItems.length} {uncompletedItems.length === 1 ? "task" : "tasks"} left
            </p>
            <div className='buttons-container'>
                <button
                    className="all-button"
                    value="all"
                    onClick={(e) => props.selectTasks(e)}
                >
                    All
                </button>
                <button
                    className="active-button"
                    value="active"
                    onClick={(e) => props.selectTasks(e)}
                >
                    Active
                </button>
                <button
                    className="completed-button"
                    value="completed"
                    onClick={(e) => props.selectTasks(e)}
                >
                    Completed
                </button>
            </div>

            {/* If There Are No Tasks Completed, Then Do Not Show -Clear Completed- Button */}
            {completedItems.length === 0
                ? <button style={{ visibility: 'hidden' }}>Clear Completed</button>
                : <button onClick={props.removeCompletedTodo}>Clear Completed</button>
            }
        </div>
    )
};
