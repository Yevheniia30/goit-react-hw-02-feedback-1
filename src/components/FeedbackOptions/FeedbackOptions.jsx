// import React, { Component } from 'react';
import s from './FeedbackOptions.module.css';
import SectionTitle from '../SectionTitle';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <div className={s.feedbackOptions}>
      <SectionTitle />
      <div className={s.btnList}>
        <button type="button" className={s.feedbackBtn} onClick={onGood}>
          Good
        </button>
        <button type="button" className={s.feedbackBtn} onClick={onNeutral}>
          Neutral
        </button>
        <button type="button" className={s.feedbackBtn} onClick={onBad}>
          Bad
        </button>
      </div>
    </div>
  );
};

export default FeedbackOptions;
