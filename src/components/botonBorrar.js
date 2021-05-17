import PropTypes from "prop-types";

const BotonBorrar = (props) => {
  const { llamando, borrarUltimoDigito } = props;
  return (
    <li><button disabled={llamando} className="big" onClick={borrarUltimoDigito}>borrar</button></li>
  );
};

BotonBorrar.propType = {
  llamando: PropTypes.bool.isRequired,
  borrarUltimoDigito: PropTypes.func.isRequired
};

export default BotonBorrar;
