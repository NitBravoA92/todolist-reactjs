const InputTodo = () => {
  const newTask = (e) => {
    e.preventDefault();
    console.log(e.target.inputDescription);
  }

  return (
    <form id="form-input-todo" onSubmit={newTask}>
      <div id="container-input-todo">
        <input type="text" placeholder="Add todo..." id="inputDescription" />
        <button type="submit" id="submit-new-task">+</button>
      </div>
    </form>
  );
}

export default InputTodo;