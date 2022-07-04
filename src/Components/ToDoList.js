import React, { useState, useEffect } from "react";
import axios from "axios";
import Todo from "./Todo";
import AddTask from "./AddTask";
import FilterTasks from "./FilterTasks";
import { useParams } from "react-router-dom";


function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [quote, setQuote] = useState({});
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");
  const { taskFilter } = useParams();

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    setTasks(newTodos);
  };

  const taskCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTasks(updatedTodos);
  };
  useEffect(() => {
    let taskFiltered;

    switch (taskFilter) {
      case "completadas":
        taskFiltered = todos.filter((task) => task.isComplete);
        setTasks(taskFiltered);
        break;
      case "incompletas":
        taskFiltered = todos.filter((task) => !task.isComplete);
        setTasks(taskFiltered);
        break;
      default:
        setTasks(todos);
        break;
    }
  }, [taskFilter]);

  useEffect(() => {
    axios
      .get("https://api.quotable.io/random?tags=inspirational")
      .then((res) => {
        let { data } = res;

 
        setQuote({
          content: data.content,
          author: data.author,

        });
        
      })

      .catch((err) => {
        console.log("There was an error in loading the Pokemons");
      });
  }, []);

  const submitEdits = (id) => {
    if (editingText === "" || editingText === " ") {
      const deleteTodo = [...todos].filter((todo) => todo.id !== id);
      setTasks(deleteTodo);
    } else {
      let updatedTodos = [...todos].map((task) => {
        if (task.id === id) {
          task.text = editingText;
        }
        return task;
      });
      setTasks(updatedTodos);
      setTodoEditing(null);
    }
  };

  const removeTask = (task) => {
    let updatedTodos = todos.filter((taskDelete) => taskDelete !== task);
    setTodos(updatedTodos);
    setTasks(updatedTodos);
  };

  console.log(quote);

  return (
    <div className="todo-cont">
      <h1>ReactJs Todo List</h1>
      <FilterTasks />
      <AddTask onSubmit={addTodo} />
      <Todo
      quote={quote}
        todos={tasks}
        taskCompleted={taskCompleted}
        setTodoEditing={setTodoEditing}
        submitEdits={submitEdits}
        setEditingText={setEditingText}
        todoEditing={todoEditing}
        removeTask={removeTask}
      />
        
    </div>
  );
}

export default ToDoList;
