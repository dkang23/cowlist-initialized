import React from 'react';
import ReactDOM from 'react-dom';
import CowList from './components/CowList.jsx';
import CreateCow from './components/CreateCow.jsx';
import axios from 'axios';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cows: [],
      clickedCow: {},
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    //this = App
    this.refreshData();
  }

  refreshData() {
    axios
      .get('/api/cows')
      .then((data) => {
        this.setState({ cows: data.data });
      })
      .catch((err) => console.error(err));
  }

  clickHandler(value) {
    this.setState({ clickedCow: value });
    console.log('cows name: ', value);
  }

  render() {
    while (this.state.cows === []) {}
    return (
      <div>
        <p>
          {this.state.clickedCow.name} {this.state.clickedCow.description}
        </p>
        <CowList clickHandler={this.clickHandler} cows={this.state.cows} />
        <CreateCow refreshData={this.refreshData.bind(this)} />
      </div>
    );
  }
}

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
