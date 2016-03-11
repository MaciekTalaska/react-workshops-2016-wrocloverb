const { $, React, ReactDOM,
        ReactBootstrap: {Row, Grid, Col, ListGroup,ListGroupItem, Button, ButtonGroup, Panel }} = window;

function ConferencesApp() {
  const conferenceDetailsData = [
    {title: "Wroc_love.rb 2016", 
      events: ["Working with Legacy Codebase", "React.js + Redux Workshops"], 
      days: [
              {id:1, name:"Day 1"}, 
              {id:2, name:"Day 2"}, 
              {id:3, name:"Day 3"}], 
      active:true}
,
    {title: "Wroc_love.rb 2015", 
      events: [], 
      days: [], 
      active:false}
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

  const ConferenceDays = ({days}) => {
    return (
      <div>
        <h4>Days:</h4>
        {(() => {
          if (days.length > 0) {
            return ( 
              <ListGroup>
                {days.map(function(day) {
                  return <ListGroupItem key={day.id}>{day.name}</ListGroupItem>;
                })} 
              </ListGroup>
              );
          } else {
            return <p><i>No days defined.</i></p>;
          }
        })()}
      </div>
    );
  };

  const ConferenceEvents = ({events}) => {
    return (
      <div>
        <h4>Events:</h4>
        {(() => {
          if (events.length > 0) {
            return (
             <ListGroup>
              {/*events.map(({event}) => {
                return <ListGroupItem key={event}>{event}</ListGroupItem>
              })*/
                events.map(function(event) {
                  return <ListGroupItem key={event}>{event}</ListGroupItem>;
                })
              }
            </ListGroup>
            );
          } else {
            return <p><i>No events defined.</i></p>;
          }
        })()}
      </div>
    );
  };

  const ConferenceDetails = ({title, days, events, active}) => {
   const btnClass = active ? 'primary' : 'default';

   const conferenceHeader = (
      <div>
        <div className="pull-right">
          <Button bsSize="xs" bsStyle={btnClass}>Show</Button>
        </div>
        {title}
      </div>
    ); 

    return (
      <Panel header={conferenceHeader}>
        <Grid>
          <Row>
            <Col md={6}>
              <ConferenceDays days={days}/>
            </Col>
            <Col md={6}>
              <ConferenceEvents events={events}/>
            </Col>  
          </Row>
        </Grid>
        {(() => {
          if (active === false) {
            return ( 
              <div className="alert alert-warning">
                <p>This is a past conference. Data available here is read-only!</p>
              </div>);
          }
        })()}
      </Panel>
    );
  };

  const Conferences = ({conferences}) => {
    return (
      <Grid clasName="container">
        <Row className="row">
          <Header/>
          {conferences.map(({title, days, events, active}) => {
            return <ConferenceDetails key={title} id={title} title={title} days={days} events={events} active={active}/>
          })}
        </Row>
      </Grid>
    );
  };

  return {
    ui() { 
      return (<Conferences conferences={conferenceDetailsData}/>);
    }
  };
};

$(() => {
  $("[data-app='Conferences']").each(function() {
    const app = ConferencesApp();
    ReactDOM.render(app.ui(), this);
  });
});
