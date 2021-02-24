import s from './FeedbackOptions.module.css';
import SectionTitle from '../SectionTitle';

const FeedbackOptions = () => {
  return (
    <div className={s.feedbackOptions}>
      <SectionTitle />
      <div className={s.btnList}>
        <button className={s.feedbackBtn}>Good</button>
        <button className={s.feedbackBtn}>Neutral</button>
        <button className={s.feedbackBtn}>Bad</button>
      </div>
    </div>
  );
};

export default FeedbackOptions;
