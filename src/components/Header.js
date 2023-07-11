import PropTypes from 'prop-types';

const Header = ({ title, subtitle }) => (
  <section id="header">
    <h1>{ title }</h1>
    <h2>{ subtitle }</h2>
  </section>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Header;
