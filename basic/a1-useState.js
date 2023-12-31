const App = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('Dora');
    const [object, setObject] = useState(
        {
            count: 0.,
            value: ''
        }
    )
    const incr = () => {
        setCount(count + 1)

    }
    const incr2 = () => {
        setObject((prevState) => ({
            ...prevState, count: prevState.count + 1
        }))
    }
    return (
        <div className="container">
            <div className="div">

                <input type="text" onChange={e => setValue(e.target.value)} />
                <h1>{value} is Count:{count} </h1>
                <h1>{object.value} is Count:{object.count} </h1>
                <button onClick={incr}>Click Me inc</button>
                <button onClick={incr2}>Click Me inc2</button>
            </div>
        </div>
    )
}

-----------------------
    const App = () => {
    const [signedin, setSignedin] = useState(false)

    const handleSignin = () => {
        setSignedin(true)
    }

    const handleSignout = () => {
        setSignedin(false)
    }
    return (
        <div>
            {signedin ? (
                <div>
                    <button type="button" onClick={handleSignout}>Sign Out</button>
                    <p>Welcome back, good to see you in here</p>
                </div>) :

                (<div>
                    <button type="button" onClick={handleSignin}>Sign In</button>
                    <p>Please Sign in</p>
                </div>)
            }
        </div>
    )
}

