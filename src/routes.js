import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './reset.css';
import theme from './helpers/theme';
import { Root } from './components/globals';
import Friends from './views/friends';
import Main from './views/main';
import Player from './views/player';
import Sidebar from './views/sidebar';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme['one']}>
        <Root>
          <GlobalStyle />
          <Friends />
          <Main />
          <Player />
          <Sidebar />
        </Root>
      </ThemeProvider>
    );
  }
}

export default App;
