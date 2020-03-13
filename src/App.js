import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Container from '../src/components/Container/Container';
import axios from 'axios';

class App extends React.Component {
  state = {
    updateValues : []
  }

  updateValues(values){
    this.setState({values});
  }

  componentDidMount(){
    axios.get('http://54.193.89.54:8230/readFields')
    .then((response)=> {
        this.updateValues( response.data.data);
    });
  }

  render() {
    return (
      <div className="App">
        <Container />
      </div>
    );
  }

}

export default App;
