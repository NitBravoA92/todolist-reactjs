import PropTypes from 'prop-types';

const Header = () => (
  <section id="header">
    <h1>Todos</h1>
    <h2>Items will persist in the browser local storage</h2>
  </section>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Header;
