import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ title = 'Feedbacks widget', children }) => {
  return (
    <section className={s.section}>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
