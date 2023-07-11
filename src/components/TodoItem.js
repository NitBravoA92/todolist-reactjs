import { AiFillEdit } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa6';
import PropTypes from 'prop-types';

const TodoItem = ({ todoTask, updateTaskStatus, deleteTask }) => (
  <li className="todo-item">
    <input type="checkbox" className="taskStatus" checked={todoTask?.completed} onChange={() => updateTaskStatus(todoTask?.id)} />
    <h3 className="taskTitle">{todoTask?.title}</h3>
    <div className="actionButtons">
      <button type="button" className="updateTask">
        <AiFillEdit />
      </button>
      <button type="button" className="deleteTask" onClick={() => deleteTask(todoTask?.id)}>
        <FaTrash />
      </button>
    </div>
  </li>
);

TodoItem.propTypes = {
  todoTask: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  updateTaskStatus: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TodoItem;
