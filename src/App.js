import React, { useState } from 'react';
import TodoList from './Components/TodoList';
import FormInput from './Components/FormInput.js';
import './index.css';

function App() {

  const [items, setItems] = useState([]);

  const addTask = (task) => {
    if (!task.text) {
      return;
    }
    const newItems = [task, ...items];
    setItems(newItems);
  };

  const deleteTask = (id) => {
    let updateItems = [...items].filter((task) => task.id !== id);
    setItems(updateItems);
  };

  const completeTask = (id) => {
    let updateItems = items.map((task) => {
      if (task.id === id) {
        task.isComplete = true;
      }
      return task;
    });
    setItems(updateItems);
  };

  return (
    <>
      <FormInput addData={addTask} />
      <TodoList
        items={items}
        deleteData={deleteTask}
        completeData={completeTask}
      />
    </>
  );

}

export default App;
