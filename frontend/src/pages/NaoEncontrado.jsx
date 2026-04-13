function NaoEncontrado({ mudarPagina }) {
  return (
    <div style={styles.container}>
      
      {/* TOPO */}
      <div style={styles.header}>
        Sistema Digital de Requerimento
      </div>

      {/* CARD */}
      <div style={styles.card}>
        <h2 style={styles.title}>Solicitação não encontrada</h2>

        <p style={styles.text}>
          Não foi possível localizar uma solicitação com o CPF informado.
        </p>

        <p style={styles.text}>
          Verifique os dados e tente novamente.
        </p>

        <button 
          style={styles.primaryButton}
          onClick={() => mudarPagina("acompanhar")}
        >
          Tentar novamente
        </button>

        <button 
          style={styles.secondaryButton}
          onClick={() => mudarPagina("home")}
        >
          Voltar ao início
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
    maxWidth: "350px",
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
  },

  title: {
    marginBottom: "20px",
  },

  text: {
    marginBottom: "10px",
    fontSize: "14px",
    color: "#333",
  },

  primaryButton: {
    width: "100%",
    padding: "12px",
    marginTop: "20px",
    backgroundColor: "#2d5be3",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  secondaryButton: {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    backgroundColor: "#fff",
    color: "#2d5be3",
    border: "2px solid #2d5be3",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default NaoEncontrado;