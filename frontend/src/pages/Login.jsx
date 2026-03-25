function Login({ mudarPagina }) {
  return (
    <div style={styles.container}>
      
      {/* TOPO */}
      <div style={styles.header}>
        Sistema Digital de Requerimento
      </div>

      {/* CARD CENTRAL */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Autenticação GOV.br</h2>

        <p style={styles.text}>
          Para acessar o sistema é necessário realizar a autenticação segura através da conta gov.com.br.
        </p>

        <button  
        style={styles.button}
        onClick={() => mudarPagina("requerimento")}
        >
          Entrar com GOV.br
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
    marginTop: "100px",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    width: "350px",
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
  },

  cardTitle: {
    marginBottom: "20px",
  },

  text: {
    marginBottom: "20px",
    fontSize: "14px",
    color: "#333",
  },

  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#1351b4",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Login;