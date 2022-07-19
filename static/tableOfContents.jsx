function TableOfContents(props){
    const [ contents, setContents] = React.useState([]);

    React.useEffect(()=>{
        fetch('/table-of-contents.json')
            .then(response=>response.json())
            .then(result => setContents(result))
    }, [])

    const listItems = [];

    for (const content of contents){
        listItems.push(<Content key={content.title} content={content} getEntry={props.handleShowEntry} />)
    }
    return (<React.Fragment><ul>{listItems}</ul></React.Fragment>)
}
