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
