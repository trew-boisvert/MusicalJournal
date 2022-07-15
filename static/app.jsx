
const Router = ReactRouterDOM.BrowserRouter;
const {Link, Switch, Route} = ReactRouterDOM;


function App(props) {
    const [showNav, setShowNav] = React.useState(false);

    const handleCloseNav = () => setShowNav(false);
    const handleShowNav = () => setShowNav(true);

    return (<Router>
                 <ReactBootstrap.Container fluid>
                    
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
                                
                                    <ReactBootstrap.Button>LogOut</ReactBootstrap.Button>
                                
                            </ul>
                        </ReactBootstrap.Offcanvas.Body>
                        
                    </ReactBootstrap.Offcanvas>
                    <Book handleShowNav={handleShowNav} />
                    </ReactBootstrap.Container>
            </Router>)
}

ReactDOM.render(<App/>, document.getElementById("root"));