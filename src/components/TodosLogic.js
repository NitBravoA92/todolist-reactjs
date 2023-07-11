import useTodoList from '../hooks/useTodoList';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

const TodosLogic = () => {

  const [todolist, saveTask, deleteTask] = useTodoList([]);

  return (
    <section id="todos-logic">
      <InputTodo addTaskToState={saveTask} />
      <TodosList tasklist={todolist} deleteTask={deleteTask} />
    </section>
  ) 
}

export default TodosLogic;