

import { useState } from "react";
import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import Elements from "./components/Elements";


function App() {
  let [toDoItems, setToDoItems] = useState([{ task:"Listen music", date:"1/1/25"},{ task:"Buy Milk", date:"28/11/1999"}]);
  
  const handleNewItem=(itemName,itemDueDate)=>{
     let newItem={};
     newItem.task=itemName;
     newItem.date=itemDueDate;
     let Item= [...toDoItems,newItem];
     setToDoItems(Item);
     
  }
  const handleDelete=(indexdel)=>{
    let newtasks = toDoItems.filter((item,index)=> index!=indexdel)
    setToDoItems(newtasks);
    }
  return <> <AppName />

 <AddToDo onNewItem={handleNewItem} /> 
 <Elements items={toDoItems} remove={handleDelete} />
  
  
</>
    
}

export default App;
