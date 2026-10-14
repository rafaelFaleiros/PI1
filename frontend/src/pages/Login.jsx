function Login({ mudarPagina, altoContraste, alternarContraste }) {
  const cores = altoContraste
    ? {
        fundo: "#000000",
        cartao: "#000000",
        texto: "#FFFFFF",
        destaque: "#FFFF00",
        textoDestaque: "#000000",
      }
    : {
        fundo: "#F5F7FA",
        cartao: "#FFFFFF",
        texto: "#374151",
        destaque: "#0F4C5C",
        textoDestaque: "#FFFFFF",
      };

  return (
    <div
      style={{
        ...styles.container,
        backgroundColor: cores.fundo,
      }}
    >
      <header
        style={{
          ...styles.header,
          backgroundColor: altoContraste ? "#000000" : "#0F4C5C",
          borderBottom: altoContraste ? "2px solid #FFFF00" : "none",
        }}
      >
        <h1 style={styles.headerTitle}>
          Sistema Digital de Requerimento
        </h1>

        <button
          type="button"
          onClick={alternarContraste}
          aria-pressed={altoContraste}
          style={{
            ...styles.contrastButton,
            backgroundColor: altoContraste ? "#FFFF00" : "#FFFFFF",
            color: altoContraste ? "#000000" : "#0F4C5C",
            border: "2px solid #FFFF00",
          }}
        >
          {altoContraste
            ? "Desativar alto contraste"
            : "Ativar alto contraste"}
        </button>
      </header>

      <main style={styles.main}>
        <section
          style={{
            ...styles.card,
            backgroundColor: cores.cartao,
            border: altoContraste ? "2px solid #FFFF00" : "none",
          }}
          aria-labelledby="titulo-login"
        >
          <h2
            id="titulo-login"
            style={{
              ...styles.cardTitle,
              color: altoContraste ? cores.destaque : "#1F2937",
            }}
          >
            Autenticação GOV.br
          </h2>

          <p
            style={{
              ...styles.text,
              color: cores.texto,
            }}
          >
            Para acessar o sistema, é necessário realizar a autenticação
            segura através da conta GOV.br.
          </p>

          <button
            type="button"
            style={{
              ...styles.button,
              backgroundColor: cores.destaque,
              color: cores.textoDestaque,
              border: altoContraste ? "2px solid #FFFF00" : "none",
            }}
            onClick={() => mudarPagina("home")}
            aria-label="Entrar no sistema utilizando a conta GOV.br"
          >
            Entrar com GOV.br
          </button>
        </section>
      </main>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },

  header: {
    width: "100%",
    padding: "18px 20px",
    textAlign: "center",
    boxSizing: "border-box",
  },

  headerTitle: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "700",
    color: "#FFFFFF",
  },

  contrastButton: {
    marginTop: "14px",
    minHeight: "44px",
    padding: "10px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "700",
  },

  main: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "70px 20px",
    boxSizing: "border-box",
  },

  card: {
    padding: "32px",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "420px",
    textAlign: "center",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.15)",
    boxSizing: "border-box",
  },

  cardTitle: {
    marginTop: 0,
    marginBottom: "20px",
    fontSize: "24px",
  },

  text: {
    marginBottom: "24px",
    fontSize: "16px",
    lineHeight: "1.5",
  },

  button: {
    width: "100%",
    minHeight: "48px",
    padding: "12px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "700",
  },
};

export default Login;