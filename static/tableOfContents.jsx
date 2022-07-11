function TableOfContents(){
    const [ contents, setContents] = React.useState([]);

    React.useEffect(()=>{
        fetch('/table-of-contents.json')
            .then(response=>response.json())
            .then(result => setContents(result))
    }, [])
    
    const alertClick = ()=>{alert("woah, such click")}

    const listItems = [];

    for (const content of contents){
        listItems.push(<Content content={content} handleClick={alertClick}/>)
    }
    return <ul>{listItems}</ul>
}