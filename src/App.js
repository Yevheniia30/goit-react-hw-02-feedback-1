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

  handleFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  countTotalFeedback = values => {
    return values.reduce((acc, value) => acc + value);
  };

  countPositiveFeedbackPercentage = (good, total) => {
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);
    const values = Object.values(this.state);
    const total = this.countTotalFeedback(values);
    const positivePercentage = this.countPositiveFeedbackPercentage(
      good,
      total,
    );

    return (
      <div className={s.App}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={keys}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
