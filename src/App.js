import React from 'react';
import SpotifyAPI from './helpers/api';

class App extends React.Component {
  state = { data: [] };
  async componentDidMount() {
    const data = await SpotifyAPI.auth();
  }
  render() {
    return <div>whats poppin</div>;
  }
}

export default App;
