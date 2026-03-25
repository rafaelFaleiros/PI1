import { useState } from "react";

function Requerimento() {
  const [texto, setTexto] = useState("");

  function enviar(e) {
    e.preventDefault();

    if (!texto) {
      alert("Digite algo!");
      return;
    }

    alert("Enviado com sucesso!");
  }

  return (
    <div>
      <h2>Novo Requerimento</h2>

      <form onSubmit={enviar}>
        <textarea
          placeholder="Descreva seu problema..."
          onChange={(e) => setTexto(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Requerimento;