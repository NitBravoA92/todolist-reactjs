const TodoItem = ({ description, updateTask, deleteTask }) => {
  return (
    <li className="todo-item">
      <input type="checkbox" className="taskStatus" />
      <h3 id="taskDescription">{description}</h3>
      <div className="actionButtons">
        <button type="button" className="updateTask">icon-upd</button>
        <button type="button" className="deleteTask">icon-del</button>
      </div>
    </li>
  )
}

export default TodoItem;