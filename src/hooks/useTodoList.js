import { useEffect, useState } from "react";

const useTodoList = (initialValue) => {
  const setLocalStorage = (todoList) => {
    localStorage.setItem('todolist-app', JSON.stringify(todoList));
  }
  
  const getFromLocalStorage = () => {
    const getTodoList = localStorage.getItem('todolist-app');
    const dataParse = getTodoList ? JSON.parse(getTodoList) : [];
    return dataParse;
  }
  
  const [todolist, setTodolist] = useState(initialValue);
  
  useEffect(() => {
    setTodolist(getFromLocalStorage()); 
  }, []);

  const saveTask = (title) => {
    const newId = todolist.length + 1;
    const tasksList = [...todolist];
    tasksList.push({
        id: newId,
        title: title,
        completed: false,
    });
    setLocalStorage(tasksList);
    setTodolist(getFromLocalStorage());
  }

  const updateTaskStatus = (id) => {
    const newTodoList = todolist.map((task, i) => {
      if(task.id === id) {
        return {
          ...task,
          completed: !task.completed
        };
      }
      return task;
    });
    setLocalStorage(newTodoList);
    setTodolist(getFromLocalStorage());
  }

  const deleteTask = (id) => {
    const tasksList = todolist.filter((task) => task.id !== id);
    setLocalStorage(tasksList);
    setTodolist(getFromLocalStorage());
  }

  return [
    todolist,
    saveTask,
    updateTaskStatus,
    deleteTask
  ]
}

export default useTodoList;