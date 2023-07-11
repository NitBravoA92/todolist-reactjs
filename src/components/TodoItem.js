import { AiFillEdit } from "react-icons/ai";
import { FaTrash } from "react-icons/fa6";

const TodoItem = ({ title }) => { // updateTask, deleteTask
  return (
    <li className="todo-item">
      <input type="checkbox" className="taskStatus" />
      <h3 className="taskTitle">{title}</h3>
      <div className="actionButtons">
        <button type="button" className="updateTask">
          <AiFillEdit />
        </button>
        <button type="button" className="deleteTask">
          <FaTrash />
        </button>
      </div>
    </li>
  )
}

export default TodoItem;