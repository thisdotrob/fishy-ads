import React from 'react';
import 'whatwg-fetch';
import AdvertList from './AdvertList.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = { advertsData: [] };
    fetch('http://localhost:3000/adverts')
      .then(response => response.json())
      .then(advertsData => this.setState({ advertsData }))
      .catch(console.log);
  }

  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <AdvertList advertsData={this.state.advertsData}/>
      </div>);
  }
}

export default App;
