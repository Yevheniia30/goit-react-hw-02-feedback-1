import React, { Component } from 'react';
import s from './App.module.css';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';

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

  // ф-ция показа статистики только при первом нажатии кнопки
  onLeaveFeedback = () => {};

  render() {
    const values = Object.values(this.state);
    const goodFeedbacks = values[0];
    const total = values.reduce((acc, value) => acc + value);
    const positivePercentage = Math.round((goodFeedbacks / total) * 100);

    const { good, neutral, bad } = this.state;
    return (
      <div className={s.App}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            handleGood={this.handleGood}
            handleBad={this.handleBad}
            handleNeutral={this.handleNeutral}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Notification message="No feedback given" />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
        </Section>
      </div>
    );
  }
}

export default App;
