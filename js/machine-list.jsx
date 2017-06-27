
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class MachinePannel extends React.Component {
  render() {
    return (
      <div className="panel-footer">
        <a className="btn btn-default pull-right" href={ `https://fabmanager.xinfab.com/#!/machines/${this.props.machineId}/reserve` }>Book</a>
        <div className="clearfix"></div>
      </div>
    )
  }
}

class MachineItem extends React.Component {
  render() {
    return (
      <div className="item panel panel-default">
        <div className="panel-heading">
          <h3 class="panel-title">{ this.props.title }</h3>
        </div>
        <div className="panel-body">
          { this.props.img ? (
            <img className="img-responsive" src={ this.props.img } />
            ) : (
            <img className="img-responsive" src={ `holder.js/400x${getRandomInt(2, 4) * 100}?theme=gray&text=&font=FontAwesome&size=100` } />
            ) }
          <p className="content">
            { this.props.content }
          </p>
        </div>
        <MachinePannel machineId={ this.props.machineId } />
      </div>
    )
  }
}

class MachineList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidUpdate() {
    // init Masonry
    var $grid = $('.machine-list').masonry({
      itemSelector: '.item'
    });

    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function() {
      $grid.masonry('layout');
    });

    Holder.run({
      images: ".machine-list .item img"
    });
  }

  componentWillMount() {
    fetch(this.props.api)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          machines: responseJson
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (!this.state.machines) {
      return <div>loading...</div>
    }

    if (this.state.machines.length === 0) {
      return <div>no machines</div>
    }

    return <div className="machine-list">
             { this.state.machines.map((m) => <MachineItem machineId={ m.id } title={ m.name } img={ m.machine_image ? "https://fabmanager.xinfab.com/" + m.machine_image : null } content={ m.spec } />
               ) }
           </div>
  }
}

ReactDOM.render(<MachineList api='https://fabmanager.xinfab.com/api/machines.json' />, document.getElementById("root"));
