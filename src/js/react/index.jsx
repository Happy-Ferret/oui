import React from 'react';
import ReactDOM from 'react-dom';

import Attention from './Attention.jsx'

class App extends React.Component {
  render() {
    return (
      <div style={{ margin: '50px auto', width: '800px' }}>
        <h1>OUI React Components</h1>

        <h2>Attention</h2>

        <Attention isDismissable alignment="center" type="warning">
          Hello! This is a short attention bar.
        </Attention>

        <Attention alignment="left" type="bad-news">
          Hello! This is a short attention bar.
        </Attention>

        <Attention alignment="center">
          Hello! This is a short attention bar.
        </Attention>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
