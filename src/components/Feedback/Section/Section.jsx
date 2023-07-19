import PropTypes from 'prop-types';

export const Section = ({ children, title, className, titleClassName }) => (
  <section className={className}>
    <h1 className={`${titleClassName} global-title`}>{title}</h1>
    {children}
  </section>
);

Section.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
  className: PropTypes.string,
  titleClassName: PropTypes.string,
};
