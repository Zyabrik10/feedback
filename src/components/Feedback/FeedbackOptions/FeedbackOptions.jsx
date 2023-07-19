import { Button } from '../Button/Button';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <ul className="feedback-buttons-list global-list">
    {options.map((mood, index) => {
      return (
        <Button key={index} mood={mood} onLeaveFeedback={onLeaveFeedback}>
          {mood}
        </Button>
      );
    })}
  </ul>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
