import { AiFillEdit } from "react-icons/ai";
import { FaTrash } from "react-icons/fa6";

const TodoItem = ({ id, title, isCompleted, updateTaskStatus, deleteTask }) => {
  return (
    <li className="todo-item" id={id}>
      <input type="checkbox" className="taskStatus" checked={isCompleted} onChange={(e) => updateTaskStatus(parseInt(e.target.parentElement.id))} />
      <h3 className="taskTitle">{title}</h3>
      <div className="actionButtons">
        <button type="button" className="updateTask">
          <AiFillEdit />
        </button>
        <button type="button" className="deleteTask" onClick={(e) => deleteTask(parseInt(e.target.parentElement.parentElement.id))}>
          <FaTrash />
        </button>
      </div>
    </li>
  )
}

export default TodoItem;