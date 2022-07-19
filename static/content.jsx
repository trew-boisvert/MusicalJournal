function Content({content, getEntry}){
//this use of curly brackets ^ is to destructure from the props object
    

    const entriesList = content.entries.map((entry, idx)=>{
                    console.log("in Content component, idx =", idx)
                    function handleClick(){
                        getEntry(entry)
                    }
                    return (<li
                    className="entry-title"
                    key={entry.title}
                    onClick={handleClick} 
                    >{entry.title}
                    </li>)})



    return <li key={content.title} >{content.title}<ul>{entriesList}</ul></li>
}
