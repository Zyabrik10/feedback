import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positives }) => {
  return (
    <ul className="statistics-list global-list">
      <li>
        <p className="global-p">Good: {good}</p>
      </li>
      <li>
        <p className="global-p">Neutral: {neutral}</p>
      </li>
      <li>
        <p className="global-p">Bad: {bad}</p>
      </li>
      <li>
        <p className="global-p">Total: {total}</p>
      </li>
      <li>
        <p className="global-p">Positive feedback: {positives}%</p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  positives: PropTypes.number,
};
