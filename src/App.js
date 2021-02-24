import React, { Component } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Container from './components/Container';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div className="App-main">
        <Container>
          <FeedbackOptions />
          <Statistics />
        </Container>
      </div>
    );
  }
}

export default App;
