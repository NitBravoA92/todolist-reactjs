import { AiFillEdit } from "react-icons/ai";
import { FaTrash } from "react-icons/fa6";

const TodoItem = ({ todoTask, updateTaskStatus, deleteTask }) => {
  return (
    <li className="todo-item">
      <input type="checkbox" className="taskStatus" checked={todoTask?.completed} onChange={(e) => updateTaskStatus(todoTask?.id) } />
      <h3 className="taskTitle">{todoTask?.title}</h3>
      <div className="actionButtons">
        <button type="button" className="updateTask">
          <AiFillEdit />
        </button>
        <button type="button" className="deleteTask" onClick={(e) => deleteTask(todoTask?.id)}>
          <FaTrash />
        </button>
      </div>
    </li>
  )
}

export default TodoItem;