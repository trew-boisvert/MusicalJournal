function Login(){

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")


    function submitLogin(e){
        e.preventDefault();
        fetch('/login', {
            method: 'POST',
            body: JSON.stringify({"email": email, "password": password}),
            headers: {
              'Content-Type': 'application/json',
            },
        }).then(response=>response.json()).then(result =>console.log(result))
    }



    return (<ReactBootstrap.Card className="login-card">
                <ReactBootstrap.Card.Header>
                    This Book Belongs To:
                </ReactBootstrap.Card.Header>
                <ReactBootstrap.Card.Body>
                    <form onSubmit={submitLogin}>
                        <ReactBootstrap.Card.Text>
                            <label htmlFor="email">Email: </label>
                        </ReactBootstrap.Card.Text>
                        <ReactBootstrap.Card.Text>
                            <input type="email" name="email" onChange={e => setEmail(e.target.value)}></input>
                        </ReactBootstrap.Card.Text>
                        <ReactBootstrap.Card.Text>
                            <label htmlFor="password">Password:</label>
                        </ReactBootstrap.Card.Text>
                        <ReactBootstrap.Card.Text>
                            <input type="password" name="password" onChange={e => setPassword(e.target.value)}></input>
                        </ReactBootstrap.Card.Text>
                        <ReactBootstrap.Card.Text>
                            <input type="submit"/>
                        </ReactBootstrap.Card.Text>
                    </form>
                </ReactBootstrap.Card.Body>
        </ReactBootstrap.Card>)
}

