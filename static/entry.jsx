function Entry(props){
  console.log(props.entry)
    return (<h1 key={props.entry.title}>I'm an entry and here is my entry {props.entry.body}</h1>)
}