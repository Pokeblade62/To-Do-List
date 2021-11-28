import React, { useState } from "react"


function Form(){
    // return(
    //     <div class="mainToDoList">
    //     <h1>Please Enter your To Do List</h1>


    //     <form>
    //         <input type="text"></input>
    //         <button class="button_plus" type="submit"></button>
    //     </form>
        

    //     </div>
    // )

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });

    setInputText("");
  }
  return (
    <div className="mainToDoList">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoItem => (
            <li>{todoItem}</li>
          ))}
          
        </ul>
      </div>
    </div>
  );
}

export default Form