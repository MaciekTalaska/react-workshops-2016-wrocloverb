const { $, React, ReactDOM,
        ReactBootstrap: {Row, Grid, Col, ListGroup,ListGroupItem, Button, ButtonGroup, Panel }} = window;

function ConferencesApp() {
  const conferenceDetailsData = [
    {title: "Wroc_love.rb 2016", events: ["Working with Legacy Codebase", "React.js + Redux Workshops"], days: ["Day 1", "Day 2", "Day 3"], active:true},
    {title: "Wroc_love.rb 2015", events: [], days: [], active:false}
  ];

  const Header = () => {
    return (
      <h1>
        <div className="pull-right">
          <ButtonGroup>
            <Button href="/"
                    bsStyle="default">Back</Button>
            <Button href="/"
                    bsStyle="primary">Plan new...</Button>
          </ButtonGroup>        
        </div>
        Conferences
      </h1>
    );
  };

  const ConferenceDays = () => {
    return (
      <div>
        <h4>Days:</h4>
        <ListGroup>
          <ListGroupItem>Working with Legacy Codebase</ListGroupItem>
          <ListGroupItem>React.js + Redux Workshops</ListGroupItem>
        </ListGroup>
      </div>
    );
  };

  const ConferenceEvents = () => {
    return (
      <div>
        <h4>Events:</h4>
        <ListGroup>
          <ListGroupItem>Day 1</ListGroupItem>
          <ListGroupItem>Day 2</ListGroupItem>
          <ListGroupItem>Day 3</ListGroupItem>
        </ListGroup>
      </div>
    );
  };

  const ConferenceDetails = () => {
    const conferenceHeader = (
      <div>
        <div className="pull-right">
          <Button bsSize="xs" bsStyle="primary">Show</Button>
        </div>
        Wroc_love.rb 2016
      </div>
    ); 

    return (
      <Panel header={conferenceHeader}>
        <Grid>
          <Row>
            <Col md={6}>
              <ConferenceDays/>
            </Col>
            <Col md={6}>
              <ConferenceEvents/>
            </Col>  
          </Row>
        </Grid>
      </Panel>
    );
  };

  const Conferences = () => {
    return (
      <Grid clasName="container">
        <Row className="row">
          <Header/>
          <ConferenceDetails/>
        </Row>
      </Grid>
    );
  };

  return {
    ui() { 
      return (<Conferences/>);
    }
  };
};

$(() => {
  $("[data-app='Conferences']").each(function() {
    const app = ConferencesApp();
    ReactDOM.render(app.ui(), this);
  });
});
