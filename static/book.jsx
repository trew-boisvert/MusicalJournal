function Book(props){
  return (<ReactBootstrap.Container>
    <ReactBootstrap.Row>{props.children}</ReactBootstrap.Row>
  </ReactBootstrap.Container>)
}