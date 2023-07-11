import TodoItem from './TodoItem';

const TodosList = ({ tasklist }) => (
  <ul id="todos-items-container">
  {
    tasklist.map((item) => <TodoItem key={item?.id} title={item?.title} />)
  }
  </ul>
);

export default TodosList;