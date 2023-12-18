// add state in input
const [inputText, setInputText] = useState('');
<input onChange={ e => {(setInputText(e.target.value))}} />
// send data child to parent 
   const [listToDo, setListToDo] = useState([]);
    let addList = (inputText) => {
        setListToDo([...listToDo, inputText])
    }
// add props in child component
// spread oparetor to add in data in array
