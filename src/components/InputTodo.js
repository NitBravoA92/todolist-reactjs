import { FaCirclePlus } from "react-icons/fa6";

const InputTodo = ({ addTaskToState }) => {

  const newTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const taskTitle = form.inputDescription.value;
    if(taskTitle.length > 0) {
      addTaskToState(taskTitle);
      form.reset();
    }
  }

  return (
    <form id="form-input-todo" onSubmit={newTask}>
      <div id="container-input-todo">
        <input type="text" placeholder="Add todo..." id="inputDescription" />
        <button type="submit" id="submit-new-task"><FaCirclePlus /></button>
      </div>
    </form>
  );
}

export default InputTodo;