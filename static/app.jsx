
const Router = ReactRouterDOM.BrowserRouter;
const {Link, Switch, Route} = ReactRouterDOM;


function Logout(){
    return (<h1>avaunt!!!</h1>)
}
function App(props) {
    const [showNav, setShowNav] = React.useState(false);

    const handleCloseNav = () => setShowNav(false);
    const handleShowNav = () => setShowNav(true);

    return (<Router>
                 <ReactBootstrap.Container fluid>
                    <ReactBootstrap.Row>
                        <ReactBootstrap.Col>
                            <ReactBootstrap.Button variant="primary" onClick={handleShowNav}>
                                Reveal Navigation
                            </ReactBootstrap.Button>
                        </ReactBootstrap.Col>
                    </ReactBootstrap.Row>
                    
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
                    <Page>
                        <Switch>
                            {/* adding exact on this route is the difference between sadness and success 
                            (switch working vs not working) */}
                            <Route exact path="/">
                                <TableOfContents />
                            </Route>
                            <Route path="/login">
                            
                                    <ReactBootstrap.Row className="justify-content-md-center">
                                        <ReactBootstrap.Col md="auto" ><Login /></ReactBootstrap.Col>
                                    </ReactBootstrap.Row>
                                
                                
                            </Route>
                            <Route path="/logout">
                                <Logout />
                            </Route>
                        </Switch>
                    </Page>
                    </ReactBootstrap.Container>
            </Router>)
}

ReactDOM.render(<App/>, document.getElementById("root"));