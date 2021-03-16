import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackBtn = ({ feedback, onLeaveFeedback }) => {
  return (
    <button
      className={s.btn}
      type="button"
      data-feedback={feedback}
      onClick={onLeaveFeedback}
    >
      {feedback}
    </button>
  );
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <FeedbackBtn
      key={option}
      feedback={option}
      onLeaveFeedback={onLeaveFeedback}
    />
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
