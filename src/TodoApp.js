import Header from './components/Header';
import TodosLogic from './components/TodosLogic';
import './App.css';

function TodoApp() {
  return (
    <div className="App">
      <Header />
      <TodosLogic />
    </div>
  );
}

export default TodoApp;
