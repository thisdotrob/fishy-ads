import React from 'react';
import 'whatwg-fetch';
import AdvertList from './AdvertList.jsx';
import NewAdvertPanel from './NewAdvertPanel.jsx';
import Button from './Button.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      advertsData: [],
      addingNewAdvert: false,
    };
    fetch('http://localhost:3000/adverts')
      .then(response => response.json())
      .then(advertsData => this.setState({ advertsData }))
      .catch(console.error);
  }

  enterAddAdvertMode = () => {
    this.setState({ addingNewAdvert: true });
  }

  render = () => {
    return (
      <div style={{ textAlign: 'center' }}>
      {(this.state.addingNewAdvert)
          ? <NewAdvertPanel
              submitAdvert={this.submitAdvert}
              setSpecies={this.setSpecies}
              setPrice={this.setPrice}
            />
          : <Button text='Create new advert' onClick={this.enterAddAdvertMode}/>}
        <AdvertList advertsData={this.state.advertsData}/>
      </div>);
  }

  submitAdvert = () => {
    fetch('http://localhost:3000/adverts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ species: this.state.species, price: this.state.price }),
    })
      .then(response => response.json())
      .then(advertsData => this.setState({ advertsData, addingNewAdvert: false }))
      .catch(console.error);
  }

  setPrice = (price) => {
    this.setState({ price });
  }

  setSpecies = (species) => {
    this.setState({ species });
  }
}

export default App;
