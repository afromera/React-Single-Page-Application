import React, { Component } from 'react';

import MenuSuperior from './components/MenuSuperior/MenuSuperior'
import Resumo from './components/Resumo/Resumo'

class App extends Component {
  render() {
    return (
      <div>
        <MenuSuperior />
        <Resumo />
      </div>
    );
  }
}

export default App;
