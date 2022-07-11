function TableOfContents(){
    const [ contents, setContents] = React.useState([]);
    const [ pageDisplay, setPageDisplay ] = React.useState("test");

    React.useEffect(()=>{
        fetch('/table-of-contents.json')
            .then(response=>response.json())
            .then(result => setContents(result))
    }, [])
    
    const alertClick = (entry)=>{
       
        setPageDisplay(<Entry entry={entry}/>)
      }

    const listItems = [];

    for (const content of contents){
        listItems.push(<Content key={content.title} content={content} getEntry={alertClick} />)
    }
    return (<React.Fragment><ul>{listItems}</ul><div>{pageDisplay}</div></React.Fragment>)
}



/* content = {"title": "Pride",
                "image": "https://i.guim.co.uk/img/media/d853c0def58d649385d8ca9d8bd8e06b1438b3ad/0_78_4441_2665/master/4441.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=96b9df8279e24a7484b00f2b45eb7dd6",
                "playlist": "link to something gay", 
                "entries": [
                    {
                        "title": "Trans March",
                        "body": "Root bought me a cute hat and gave me a unicorn patch to sew onto my bag.",
                        "images": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYTHz_m9fOQaA0EKYl7R5D9uEPvtNsJlLDFUAEVIwAvnDBExBJOQ_4mrJCiyrTwiZvxJU&usqp=CAU"],
                        "date": "date time thingy"
                    },     {
                        "title": "Sunday Pride",
                        "body": "So many people, so drunk, so rowdy, I just want breakfast.",
                        "images": ["https://static01.nyt.com/images/2019/06/08/world/08warsaw-pride2/08warsaw-pride2-videoSixteenByNineJumbo1600.jpg"],
                        "date": "another date"
                    }
                ]}
*/