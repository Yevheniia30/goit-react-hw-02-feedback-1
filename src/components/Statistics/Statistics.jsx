import React, { Component } from 'react';
import s from './Statistics.module.css';
import SectionTitle from '../SectionTitle';
import FeedbackOptions from '../FeedbackOptions';

class Statistics extends Component {
  state = {};
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={s.statistics}>
        <SectionTitle />
        <p className={s.feedbackQuantity}>Good:{good}</p>
        <p className={s.feedbackQuantity}>Neutral:{neutral} </p>
        <p className={s.feedbackQuantity}>Bad: {bad}</p>
        <FeedbackOptions />
      </div>
    );
  }
}

export default Statistics;
