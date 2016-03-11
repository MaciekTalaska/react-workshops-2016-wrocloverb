const { $, React, ReactDOM,
        ReactBootstrap: {Row, Grid, Button, ButtonGroup, Panel }} = window;

function ConferencesApp() {
  const Header = () => {
    return (<h1>
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

  const ConferenceDetails = () => {
    const conferenceHeader = (
      <div>
        <div className="pull-right">
          <Button bsSize="xs" bsStyle="primary">Show</Button>
        </div>
        Wroc_love.rb 2016
      </div>
    ); 

    return (<Panel header={conferenceHeader}>
              Just a placeholder...
            </Panel>
    );
  };

  const Conferences = () => {
    return (<Grid clasName="container">
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
