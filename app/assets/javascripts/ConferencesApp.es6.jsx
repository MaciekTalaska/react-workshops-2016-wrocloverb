const { $, React, ReactDOM,
        ReactBootstrap: {Row, Grid, Button, ButtonGroup}} = window;

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

  const Conferences = () => {
    return (<Grid clasName="container">
              <Row className="row">
                <Header/>
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
