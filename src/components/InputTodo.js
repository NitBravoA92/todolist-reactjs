import { FaCirclePlus } from 'react-icons/fa6';
import PropTypes from 'prop-types';

const InputTodo = ({ addTaskToState }) => {
  const newTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const taskTitle = form.inputDescription.value;
    if (taskTitle.length > 0) {
      addTaskToState(taskTitle);
      form.reset();
    }
  };

  return (
    <form id="form-input-todo" onSubmit={newTask}>
      <div id="container-input-todo">
        <input type="text" placeholder="Add todo..." id="inputDescription" />
        <button type="submit" id="submit-new-task" aria-label="Add task"><FaCirclePlus /></button>
      </div>
    </form>
  );
};

InputTodo.propTypes = {
  addTaskToState: PropTypes.func.isRequired,
};

export default InputTodo;
