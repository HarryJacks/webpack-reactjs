import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'App Name',
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.title}</p>
      </div>
    );
  }
 
}


export default App;