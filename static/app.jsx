// alert("woot")
// onMouseEnter
// onMouseLeave

function Content({content}){
    const alertClick = ()=>{alert("woah, such click")}

    const entriesList = content.entries.map((entry)=>{return <li onClick={alertClick} onMouseEnter={changeBackground} onMouseLeave={changeBackground} >{entry.title}</li>})

    function changeBackground(evt){
        const el = evt.target;
        el.style.background = el.style.background ==='yellow'? el.style.background = "white": el.style.background = "yellow";
    }

    return <li key={content.title}>{content.title}<ul>{entriesList}</ul></li>
}


function TableOfContents(){
    const [ contents, setContents] = React.useState([]);

    React.useEffect(()=>{
        fetch('/table-of-contents.json')
            .then(response=>response.json())
            .then(result => setContents(result))
    }, [])

    const listItems = [];

    for (const content of contents){
        listItems.push(<Content content={content}/>)
    }
    return <ul>{listItems}</ul>
}

function BasicComponent(props) {
    return (<div><TableOfContents/><p>Roots Baybay!</p></div>)
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