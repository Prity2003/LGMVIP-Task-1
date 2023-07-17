import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import TodoList from './Components/TodoList';


function App() {

  const [input,setInput] = useState("");
  const [items, setItems] = useState([]);

  const itemEvents = (e)=>{
    setInput(e.target.value);
  }
  const addItems = ()=>{
    setItems((oldItems)=>{
      return [...oldItems, input];
    });
    setInput("");
  }
  const deleteItems=(id) =>{
    console.log("deleted");

    setItems((oldItems)=>{
      return oldItems.filter((arrayElements, index)=>{
          return index!== id;
      });
    })
  }
  const completeTask=(id)=>{
    console.log("Task completed");
    setItems((oldItems)=>{
    return oldItems.filter((arrayElements,index)=>{
        return index === id;
    });
  });
  }

  // const validation = ()=>{
  //   let textIsValid = true;
  //   let errors = {};
  //   console.log(input,"input")
  //   if(!input.todo.length){
  //     textIsValid=false;
  //     errors['todo'] = "Please add a Task";
  //   }
  //   setInput({...input, errors:errors})
  //   return textIsValid;
  // }

  return (
    <>
    <div className="main-div">
      <div className='center_div'>
        <br/>
        <h1> My Todo-List</h1>
        <br/>
        <input type='text' 
        id='todo'
        placeholder='Add an item'
        value={input} 
        onChange = {itemEvents}/>
        <button onClick={addItems}>+</button>
        <ol>
          {
            items.map((itemVal,index)=>{
              return <TodoList 
              key = {index}
              id = {index}
              text = {itemVal}
              onSelect = {deleteItems}
              onSel = {completeTask}
              />;
            })
          }
        </ol>
      </div>

    </div>
    </>
  );
}

export default App;
