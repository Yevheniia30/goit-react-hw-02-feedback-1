import React, { Component } from 'react';
import s from './App.module.css';
// import Statistics from './components/Statistics';
// import FeedbackOptions from './components/FeedbackOptions';
import Container from './components/Container';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // ф-ция для положительных отзывов
  handleGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  // ф-ция для нейтральніх отзывов
  handleNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  // ф-ция для отрицательных отзывов
  handleBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="App-main">
        <Container>
          <div className={s.feedbackOptions}>
            {/* <SectionTitle /> */}
            <div className={s.btnList}>
              <button
                type="button"
                className={s.feedbackBtn}
                onClick={this.handleGood}
              >
                Good
              </button>
              <button
                type="button"
                className={s.feedbackBtn}
                onClick={this.handleNeutral}
              >
                Neutral
              </button>
              <button
                type="button"
                className={s.feedbackBtn}
                onClick={this.handleBad}
              >
                Bad
              </button>
            </div>
          </div>

          <div className={s.statistics}>
            <p className={s.feedbackQuantity}>Good: {good}</p>
            <p className={s.feedbackQuantity}>Neutral: {neutral} </p>
            <p className={s.feedbackQuantity}>Bad: {bad}</p>
          </div>
          {/* <FeedbackOptions
            onGood={this.handleGood}
            onNeutral={this.handleNeutral}
            onBad={this.handleBad}
          />
          <Statistics /> */}
        </Container>
      </div>
    );
  }
}

export default App;
