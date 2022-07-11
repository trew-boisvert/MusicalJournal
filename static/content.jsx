function Content({content, getEntry}){
//this use of curly brackets ^ is to destructure from the props object
    
//idea: pass index to handle click so that we can use it to grab the entry we have
// OR maybe it's better to just make new route/new fetch
    // handleClick(){ getIndex}

    const entriesList = content.entries.map((entry, idx)=>{
                    console.log("in Content component, idx =", idx)
                    function handleClick(){
                        getEntry(entry)
                    }
                    return (<li
                    key={entry.title}
                    onClick={handleClick} 
                    onMouseEnter={changeBackground} 
                    onMouseLeave={changeBackground} >{entry.title}
                    </li>)})

    function changeBackground(evt){
        const elStyle = evt.target.style;
        elStyle.background = elStyle.background ==='yellow'? elStyle.background = "white": elStyle.background = "yellow";
    }

    return <li key={content.title}>{content.title}<ul>{entriesList}</ul></li>
}

/*[str1, str2, str3]
map => [[str1, 0]]


Array.map(callbackFunction(item from orig array)=> item.furColor)-->return new array

lst [item.fur_color for item in list]

*/