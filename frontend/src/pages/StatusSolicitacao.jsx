function StatusSolicitacao({ status, mudarPagina }) {
  return (
    <div style={styles.container}>
      
      <div style={styles.header}>
        Sistema Digital de Requerimento
      </div>

      <div style={styles.card}>
        <h2>Status da Solicitação</h2>

        <p style={styles.label}>Situação:</p>

        <div style={styles.statusBox}>
          {status}
        </div>

        <button 
          style={styles.primaryButton}
          onClick={() => mudarPagina("home")}
        >
          Voltar ao início
        </button>

        <button 
          style={styles.secondaryButton}
          onClick={() => mudarPagina("acompanhar")}
        >
          Nova busca
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

  label: {
    marginTop: "20px",
    marginBottom: "10px",
    fontSize: "14px",
  },

  statusBox: {
    padding: "15px",
    backgroundColor: "#e5e7eb",
    borderRadius: "5px",
    fontWeight: "bold",
    marginBottom: "20px",
  },

  primaryButton: {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    backgroundColor: "#2d5be3",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
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
  },
};

export default StatusSolicitacao;