// todo input > add state in the input
const [inputText, setInputText] = useState('');
<input onChange={ e => {(setInputText(e.target.value))}} />
// app >  send data child to parent 
   const [listToDo, setListToDo] = useState([]);
    let addList = (inputText) => {
        setListToDo([...listToDo, inputText])
    }
//Add props in the child component
// spread operator to add data in an array
return (
   <div> 
      <TodoInput addList={addList} />
   </div>
)
// todo input > add props
// todo input > call the function
<button onClick={() =>{
   props.addList(inputText)
   setInputText('') // to empty the input box, add value={inputText}
}
   }

// app
{listToDo.map((listItem, i) => {
                    return (
                        <TodoList key={i} item={listItem} />
                    )
                })}

// todolist >> add props
<li> {props.item} <btn> </btn><li>
// app
    const deleteItem = (key) => {
        let newListToDo = [...listToDo];
        newListToDo.splice(key, 1);
        setListToDo([...newListToDo])
    }
       
 <TodoList key={i} index={i} item={listItem} deleteItem={deleteItem} />
// Todo list
        <span className="icons">
                    <i className="fa-solid fa-trash-can icon-delete" onClick={
                        () => {
                            props.deleteItem(props.item)
                        }
                    }></i>
       </span>
// app
  let addList = (inputText) => {
        if (inputText !== '')
            setListToDo([...listToDo, inputText])
    }
