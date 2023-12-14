
const App = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `${count} count`
    })
    return (
        <div className="container">
            <div className="div">
                <h1>Count: {count}</h1>
                <button onClick={() => setCount(count + 1)}> click 1</button>
            </div>
        </div >
    )
}
