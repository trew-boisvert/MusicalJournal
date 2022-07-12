
const Router = ReactRouterDOM.BrowserRouter;
const {Link, Switch, Route} = ReactRouterDOM;

function Login(){
    return (<form>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email"></input>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password"></input>
        <input type="submit"/>
    </form>)
}


function Logout(){
    return (<h1>avaunt!!!</h1>)
}
function App(props) {
    const [showNav, setShowNav] = React.useState(false);

    const handleCloseNav = () => setShowNav(false);
    const handleShowNav = () => setShowNav(true);

    return (<Router>
                <div>
                    <ReactBootstrap.Button variant="primary" onClick={handleShowNav}>
                        Reveal Navigation
                    </ReactBootstrap.Button>
                    <ReactBootstrap.Offcanvas show={showNav} onHide={handleCloseNav}>
                        <ReactBootstrap.Offcanvas.Header closeButton >
                            <ReactBootstrap.Offcanvas.Title>Navigation</ReactBootstrap.Offcanvas.Title>
                        </ReactBootstrap.Offcanvas.Header>
                        <ReactBootstrap.Offcanvas.Body>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/logout">Log Out</Link>
                                </li>
                            </ul>
                        </ReactBootstrap.Offcanvas.Body>
                        
                    </ReactBootstrap.Offcanvas>
            
                    <Switch>
                        {/* adding exact on this route is the difference between sadness and success 
                        (switch working vs not working) */}
                        <Route exact path="/">
                            <TableOfContents />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/logout">
                            <Logout />
                        </Route>
                    </Switch>
                </div>
            </Router>)
}

ReactDOM.render(<App/>, document.getElementById("root"));