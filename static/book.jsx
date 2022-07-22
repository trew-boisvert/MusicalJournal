// How does this code look?  Is there too much happening here?

// How do we choose between using props vs composition? 
          // I'm especially anxious about having these switch statements 
          // in a separate file from the router component

// what else should we probably be doing differently?

function Book(props){
    const [ pageDisplay, setPageDisplay ] = React.useState("");
    
    const showEntry = (entry)=>{
       
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
                  <TableOfContents handleShowEntry={showEntry}/>
              </Route>
              <Route path="/login">
              
                      <ReactBootstrap.Row className="justify-content-md-center">
                          <ReactBootstrap.Col md="auto" ><Login /></ReactBootstrap.Col>
                      </ReactBootstrap.Row>
                  
                  
              </Route>
          </Switch>
      </Page>
        <Page>
          <h1>Right Page right Here, Write on me! Great Words with Lovely Yummy Thoughts</h1>
          <div>{pageDisplay}</div>
      </Page>
    </ReactBootstrap.Row>
  </ReactBootstrap.Container>)
}