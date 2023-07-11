import useTodoList from '../hooks/useTodoList';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

const TodosLogic = () => {

  const [todolist, saveTask] = useTodoList([]);

  return (
    <section id="todos-logic">
      <InputTodo addTaskToState={saveTask} />
      <TodosList tasklist={todolist} />
    </section>
  ) 
}

export default TodosLogic;