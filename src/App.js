import React, { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
function App() {
  
  // create state to render list
  const [listTodo, setListTodo] = useState([]);
  
  // addList
  let addList = (inputText)=>{
    if(inputText!=="")
    //... means previous element of arrey first then add new one
    setListTodo([...listTodo, inputText])
  }

  const deleteListItem = (key)=>{
     let newListTodo = [...listTodo];
     newListTodo.splice(key,1);
     setListTodo([...newListTodo]);
  }
  
  
  return (
    <div className='main-container'>
      <div className="center-container">

          {/* child comp send data to parent use props |fun addList */}
          <TodoInput addList={addList}/>

          <h1 className='app-heading'>
            TODO
          </h1>
          <hr />

          {/* map method */}
          {listTodo.map((listItem, i)=>{
            return (
              <TodoList key={i} item={listItem} index={i} deleteItem={deleteListItem} />
            )
          })}
      </div>
    </div>
  );
}

export default App;
