import Header from './components/Header';
import TodosLogic from './components/TodosLogic';
import './App.css';

function TodoApp() {
  return (
    <div className="App">
      <Header title="Todos" subtitle="Items will persist in the browser local storage" />
      <TodosLogic />
    </div>
  );
}

export default TodoApp;
