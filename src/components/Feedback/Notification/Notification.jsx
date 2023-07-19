import PropTypes from 'prop-types';

export const Notification = ({ message }) => (
  <p className="global-p">{message}</p>
);

Notification.propTypes = {
  message: PropTypes.string,
};
