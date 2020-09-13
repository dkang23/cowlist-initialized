import React from 'react';
import axios from 'axios';
class CreateCow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };
  }

  onChange(e) {
    console.log(e.target.name);
    var name = e.target.name;
    this.setState({ [name]: e.target.value });
  }

  submit() {
    console.log(this.state);
    axios
      .post('/api/cows', this.state)
      .then((data) => {
        console.log(data);
        this.props.refreshData();
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div>
        <h4>Add more cows!</h4>
        Enter Cow name:
        <input
          name='name'
          value={this.state.name}
          onChange={this.onChange.bind(this)}
        />
        <br></br>
        Enter Cow description:
        <input
          name='description'
          value={this.state.description}
          onChange={this.onChange.bind(this)}
        />
        <br></br>
        <button onClick={this.submit.bind(this)}> Add Cow </button>
      </div>
    );
  }
}

export default CreateCow;
