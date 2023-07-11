import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({ tasklist, updateTaskStatus, deleteTask }) => (
  <ul id="todos-items-container">
    {
    tasklist.map((task) => (
      <TodoItem
        key={task?.id}
        updateTaskStatus={updateTaskStatus}
        deleteTask={deleteTask}
        todoTask={task}
      />
    ))
  }
  </ul>
);

TodosList.propTypes = {
  tasklist: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
  updateTaskStatus: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TodosList;
