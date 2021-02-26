import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={s.statistics}>
      <p className={s.feedbackQuantity}>Good: {good}</p>
      <p className={s.feedbackQuantity}>Neutral: {neutral} </p>
      <p className={s.feedbackQuantity}>Bad: {bad}</p>
      <p className={s.feedbackQuantity}>Total: {total}</p>
      <p className={s.feedbackQuantity}>
        Positive feedback: {isNaN(positivePercentage) ? 0 : positivePercentage}{' '}
        %
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
