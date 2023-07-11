import TodoItem from './TodoItem';

const TodosList = ({ tasklist, updateTaskStatus, deleteTask }) => (
  <ul id="todos-items-container">
  {
    tasklist.map((task, i) => <TodoItem key={i} updateTaskStatus={updateTaskStatus} deleteTask={deleteTask} id={task?.id} title={task?.title} isCompleted={task?.completed} />)
  }
  </ul>
);

export default TodosList;