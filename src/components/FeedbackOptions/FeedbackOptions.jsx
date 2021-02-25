// import React, { Component } from 'react';
import s from './FeedbackOptions.module.css';
// когда передаем пропы функций, негласный стандарт называть их On...
const FeedbackOptions = ({ handleGood, handleNeutral, handleBad }) => {
  return (
    <div className={s.feedbackOptions}>
      <button type="button" className={s.feedbackBtn} onClick={handleGood}>
        Good
      </button>
      <button type="button" className={s.feedbackBtn} onClick={handleNeutral}>
        Neutral
      </button>
      <button type="button" className={s.feedbackBtn} onClick={handleBad}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
