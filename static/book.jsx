function Book(props){
    const [ pageDisplay, setPageDisplay ] = React.useState("");
    
    const alertClick = (entry)=>{
       
        setPageDisplay(<Entry entry={entry}/>)
      }
    return (<ReactBootstrap.Container>
    <ReactBootstrap.Row>
      <Page>
          <ReactBootstrap.Button variant="primary" onClick={props.handleShowNav}>
              Reveal Navigation
          </ReactBootstrap.Button>
          <Switch>
              {/* adding exact on this route is the difference between sadness and success 
              (switch working vs not working) */}
              <Route exact path="/">
                  <TableOfContents handleShowEntry={alertClick}/>
              </Route>
              <Route path="/login">
              
                      <ReactBootstrap.Row className="justify-content-md-center">
                          <ReactBootstrap.Col md="auto" ><Login /></ReactBootstrap.Col>
                      </ReactBootstrap.Row>
                  
                  
              </Route>
              <Route path="/logout">
                  <Logout />
              </Route>
          </Switch>
      </Page>
        <Page>
          <h1>right page right here, write on me!</h1>
          <div>{pageDisplay}</div>
      </Page>
    </ReactBootstrap.Row>
  </ReactBootstrap.Container>)
}