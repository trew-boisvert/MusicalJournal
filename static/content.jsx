function Content({content, handleClick}){
//this use of curly brackets ^ is to destructure from the props object
    

    const entriesList = content.entries.map((entry)=>{return <li 
                                onClick={handleClick} 
                                onMouseEnter={changeBackground} 
                                onMouseLeave={changeBackground} >{entry.title}
                            </li>})

    function changeBackground(evt){
        const elStyle = evt.target.style;
        elStyle.background = elStyle.background ==='yellow'? elStyle.background = "white": elStyle.background = "yellow";
    }

    return <li key={content.title}>{content.title}<ul>{entriesList}</ul></li>
}