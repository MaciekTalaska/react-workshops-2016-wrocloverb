const { $, React, ReactDOM, 
        ReactBootstrap: {Row, Grid, Panel, Button}} = window;

function OverviewApp() {
  const Header = () => {
    return (<h1>
              <div className="pull-right">
                <p><Button href="/conferences" bsStyle="primary">Detailed view</Button></p>
              </div>
              Conferences
           </h1> );
  };

  const ConferenceRow = ({id, name}) => {
    const contents = 
      <h3>
        <div className="pull-right">
          <Button href="/conferences/${id}" 
                  bsStyle="primary"
                  bsSize="xs">Show</Button>
          
        </div>
        {name}
      </h3>;

    return (
      <Panel expanded={false} collapsible header={contents} />
    );
  };

  const Overview = () => {
    return (<Grid className="container">
              <Row className="row">
                <Header/>
                <ConferenceRow id="active=conference" name="wroc_love.rb 2016"/>
                <ConferenceRow id="past-conference" name="wroc_love.rb 2015" />
              </Row>
            </Grid>)
  };

  return {
    ui() { 
      return <Overview/>; 
    }
  };
}

$(() => {

    $("[data-app='Overview']").each(function() {

        const app = OverviewApp();

        ReactDOM.render(app.ui(), this);

    });

});
