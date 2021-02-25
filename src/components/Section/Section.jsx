import s from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
};

export default Section;
