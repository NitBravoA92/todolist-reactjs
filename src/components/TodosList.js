import TodoItem from './TodoItem';

const TodosList = ({ tasklist, deleteTask }) => (
  <ul id="todos-items-container">
  {
    tasklist.map((item, i) => <TodoItem key={i} deleteTask={deleteTask} id={item?.id} title={item?.title} />)
  }
  </ul>
);

export default TodosList;