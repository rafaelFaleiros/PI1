// Localização: frontend/src/pages/Login.jsx

function Login({ mudarPagina }) {
  return (
    <div style={styles.container}>
      <div style={styles.header}>Sistema Digital de Requerimento</div>

      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Acesso ao Sistema</h2>
        
        {/* BOTÃO PARA O CIDADÃO */}
        <button  
          style={styles.button}
          onClick={() => mudarPagina("home")}
        >
          Entrar como Cidadão (GOV.br)
        </button>

        <div style={{ margin: "15px 0", color: "#666" }}>— ou —</div>

        {/* BOTÃO PARA O OPERADOR DA PREFEITURA */}
        <button  
          style={{ ...styles.button, backgroundColor: "#4b5563" }}
          onClick={() => mudarPagina("dashboard")}
        >
          Painel Administrativo (Operador)
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