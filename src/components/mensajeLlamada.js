import PropTypes from "prop-types";

const MensajeLlamada = (props) => {
  const { llamando } = props;
  return (
    <span className={`mensaje${!llamando ? " off" : ""}`}>Llamando...</span>
  );
};

MensajeLlamada.propTypes = {
  llamando: PropTypes.bool.isRequired
};

export default MensajeLlamada;
