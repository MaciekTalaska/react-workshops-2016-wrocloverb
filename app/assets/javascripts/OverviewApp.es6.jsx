const { $, React, ReactDOM, 
        ReactBootstrap: {Row, Grid, Button}} = window;

function OverviewApp() {
  const initialState = () => {
    return [
      {id: "active-conference", name: "wroc_love.rb 2016" },
      {id: "past-conference"  , name: "wroc_love.rb 2015" }
    ];
  };

  const Header = () => {
    return (<h1>
              <div className="pull-right">
                <p><Button href="/conferences" bsStyle="primary">Detailed view</Button></p>
              </div>
              Conferences
           </h1> );
  };

  const ConferenceRow = ({id, name}) => {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <div className="pull-right">
            <Button bsStyle="primary"
                    bsSize="xs"
                    href={`/conferences/${id}`}>Show</Button>
          </div> 
          <h3 className="panel-title">{name}</h3>
        </div>
      </div>
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
