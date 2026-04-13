function SolicitacaoEnviada({ mudarPagina }) {
  return (
    <div style={styles.container}>
      
      {/* TOPO */}
      <div style={styles.header}>
        Sistema Digital de Requerimento
      </div>

      {/* CARD */}
      <div style={styles.card}>
        <h2 style={styles.title}>Solicitação enviada!</h2>

        <p style={styles.text}>
          Sua solicitação foi enviada com sucesso.
        </p>

        <p style={styles.text}>
          Você poderá acompanhar o andamento utilizando seu CPF.
        </p>

        <button 
          style={styles.primaryButton}
          onClick={() => mudarPagina("home")}
        >
          Voltar para o início
        </button>

        <button 
          style={styles.secondaryButton}
          onClick={() => mudarPagina("acompanhar")}
        >
          Acompanhar Solicitação
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
    fontSize: "20px",
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

export default SolicitacaoEnviada;