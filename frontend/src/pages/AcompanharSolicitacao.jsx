import { useState } from "react";

function AcompanharSolicitacao({ mudarPagina }) {
  const [cpf, setCpf] = useState("");

  function buscar() {
    if (!cpf) {
      alert("Digite o CPF!");
      return;
    }

    if (cpf === "111") {
      mudarPagina("statusEmAnalise");
    } else if (cpf === "222") {
      mudarPagina("statusConcluido");
    } else {
      mudarPagina("naoEncontrado");
    }
  }

  return (
    <div style={styles.container}>
      
      <div style={styles.header}>
        Sistema Digital de Requerimento
      </div>

      <div style={styles.card}>
        <h2>Acompanhar Solicitação</h2>

        <input
          placeholder="Digite seu CPF"
          style={styles.input}
          onChange={(e) => setCpf(e.target.value)}
        />

        <button style={styles.button} onClick={buscar}>
          Buscar
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "#dcdcdc",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  header: {
    width: "100%",
    backgroundColor: "#1e3a8a",
    color: "#fff",
    padding: "15px",
    textAlign: "center",
    fontWeight: "bold",
  },

  card: {
    marginTop: "120px",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "300px",
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },

  button: {
    width: "100%",
    marginTop: "20px",
    padding: "12px",
    backgroundColor: "#2d5be3",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default AcompanharSolicitacao;