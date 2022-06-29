// alert("woot")

function BasicComponent(props) {
    return (<div><p>Roots Baby!</p></div>)
}

/*
Table of contents
set up state to hold data
use useeffect to make fetch request
make an array with data we received (some kinda loop)
render that array

*/


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BasicComponent/>)