import s from './Statistics.module.css';
import SectionTitle from '../SectionTitle';

const Statistics = () => {
  return (
    <div className={s.statistics}>
      <SectionTitle />
      <p className={s.feedbackQuantity}>Good: </p>
      <p className={s.feedbackQuantity}>Neutral: </p>
      <p className={s.feedbackQuantity}>Bad: </p>
    </div>
  );
};

export default Statistics;
