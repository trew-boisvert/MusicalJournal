// alert("woot")

function BasicComponent(props) {
    return (<div><p>Roots Baby!</p></div>)
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BasicComponent/>)