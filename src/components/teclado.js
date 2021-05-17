import PropTypes from "prop-types";
import NumeroTeclado from "./numeroTeclado";
import BotonBorrar from "./botonBorrar";

const Teclado = (props) => {
  const { llamando, anyadirDigito, borrarUltimoDigito } = props;
  return (
    <ol className="teclado">
      <NumeroTeclado llamando={llamando} anyadirDigito={anyadirDigito} />
      <BotonBorrar llamando={llamando} borrarUltimoDigito={borrarUltimoDigito} />

    </ol>
  );
};
Teclado.propTypes = {
  llamando: PropTypes.bool.isRequired,
  anyadirDigito: PropTypes.func.isRequired,
};
export default Teclado;
