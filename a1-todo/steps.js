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
// inputlist >> add props
<li> {props.item} <btn> </btn><li>
// add 
{listToDo.map((listItem, i) => {
                    return (
                        <TodoList key={i} item={listItem} />
                    )
                })}

