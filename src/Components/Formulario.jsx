import { useState } from "react";
import Card from "./Card";
import MensajeError from "./MensajeError";

const Formulario = () => {
    const [persona, setPersona] = useState({
      nombre: "",
      peli: "",
    });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const regex = /^[^\s].*/;
        if (persona.nombre.length > 2 && (persona.peli.length > 5) && (regex.test(persona.peli))) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <label>Ingresa tu nombre</label>
        <input
          type="text"
          value={persona.nombre}
          onChange={(event) =>
            setPersona({ ...persona, nombre: event.target.value })
          }
        />
        <label>Ingresa tu peli favorita</label>
        <input
          type="text"
          value={persona.peli}
          onChange={(event) =>
            setPersona({ ...persona, peli: event.target.value })
          }
        />
        <button>Enviar</button>
      </form>

      {show ? <Card persona={persona} /> : null}
      {error && <MensajeError />}

    </div>
  );
};

export default Formulario;