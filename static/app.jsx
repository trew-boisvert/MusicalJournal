// alert("woot")
// onMouseEnter
// onMouseLeave

// still be able to use this app.import React from "react";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
const Router = ReactRouterDOM.BrowserRouter;
const {Link, Switch, Route} = ReactRouterDOM;
// console.log(ReactRouterDOM.BrowserRouter)

// function JournalEntry(props){ // entries
//     const [entryVisible, setEntryVisible] = React.useState(false);



// }






function Login(){
    return (<h1>LOGIN</h1>)
}


function Logout(){
    return (<h1>avaunt!!!</h1>)
}
function App(props) {
    return (<Router>
                <div>
                    <nav>
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
                    </nav>
            
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


/*
Table of contents
set up state to hold data
use useeffect to make fetch request
make an array with data we received (some kinda loop)
render that array

*/


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App/>)
ReactDOM.render(<App/>, document.getElementById("root"));