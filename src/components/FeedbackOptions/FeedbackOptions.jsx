import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
// когда передаем пропы функций, негласный стандарт называть их On...
const FeedbackOptions = ({
  handleGood,
  handleNeutral,
  handleBad,
  onLeaveFeedback,
}) => {
  return (
    <div className={s.feedbackOptions}>
      <button
        type="button"
        className={s.btn + ' ' + s.goodBtn}
        onClick={handleGood}
      >
        Good
      </button>
      <button
        type="button"
        className={s.btn + ' ' + s.neutralBtn}
        onClick={handleNeutral}
      >
        <img src="" alt="" />
        Neutral
      </button>
      <button
        type="button"
        className={s.btn + ' ' + s.badBtn}
        onClick={handleBad}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  handleGood: PropTypes.func.isRequired,
  handleNeutral: PropTypes.func.isRequired,
  handleBad: PropTypes.func.isRequired,
};

export default FeedbackOptions;
