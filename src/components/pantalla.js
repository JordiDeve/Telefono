import PropTypes from "prop-types";

const Pantalla = (props) => {
  const { numero } = props;
  return (
    <span className="numero">{numero}</span>
  );
};
Pantalla.propTypes = {
  numero: PropTypes.string.isRequired
};
export default Pantalla;
