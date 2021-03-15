import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
// когда передаем пропы функций, негласный стандарт называть их On...
const FeedbackOptions = ({ options, onleaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button key={option} className={s.btn} onClick={onleaveFeedback}>
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FeedbackOptions;
