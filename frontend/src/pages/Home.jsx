function Home({ mudarPagina, altoContraste, alternarContraste }) {
  return (
    <div
      style={{
        ...styles.container,
        ...(altoContraste ? styles.contraste.container : {}),
      }}
    >
      <header
        style={{
          ...styles.header,
          ...(altoContraste ? styles.contraste.header : {}),
        }}
      >
        <h1
          style={{
            ...styles.headerTitle,
            ...(altoContraste ? styles.contraste.headerTitle : {}),
          }}
        >
          Sistema Digital de Requerimento
        </h1>

        <button
          type="button"
          style={{
            ...styles.contrastButton,
            ...(altoContraste ? styles.contraste.contrastButton : {}),
          }}
          onClick={alternarContraste}
          aria-pressed={altoContraste}
          aria-label={
            altoContraste
              ? "Desativar alto contraste"
              : "Ativar alto contraste"
          }
        >
          {altoContraste ? "Contraste normal" : "Alto contraste"}
        </button>
      </header>

      <main style={styles.main}>
        <section
          style={{
            ...styles.card,
            ...(altoContraste ? styles.contraste.card : {}),
          }}
          aria-labelledby="titulo-home"
        >
          <h2
            id="titulo-home"
            style={{
              ...styles.cardTitle,
              ...(altoContraste ? styles.contraste.cardTitle : {}),
            }}
          >
            Acesso ao sistema
          </h2>

          <button
            type="button"
            style={{
              ...styles.primaryButton,
              ...(altoContraste ? styles.contraste.primaryButton : {}),
            }}
            onClick={() => mudarPagina("requerimento")}
            aria-label="Iniciar um novo requerimento"
          >
            Novo Requerimento
          </button>

          <button
            type="button"
            style={{
              ...styles.secondaryButton,
              ...(altoContraste ? styles.contraste.secondaryButton : {}),
            }}
            onClick={() => mudarPagina("acompanhar")}
            aria-label="Acompanhar uma solicitação existente"
          >
            Acompanhar Solicitação
          </button>
        </section>
      </main>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#F5F7FA",
    display: "flex",
    flexDirection: "column",
  },

  header: {
    width: "100%",
    backgroundColor: "#0F4C5C",
    color: "#FFFFFF",
    padding: "18px 20px",
    textAlign: "center",
    boxSizing: "border-box",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
  },

  headerTitle: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "700",
    color: "#FFFFFF",
  },

  contrastButton: {
    minHeight: "44px",
    padding: "10px 16px",
    backgroundColor: "#FFFFFF",
    color: "#0F4C5C",
    border: "2px solid #FFFFFF",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
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
    backgroundColor: "#FFFFFF",
    padding: "32px",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "420px",
    textAlign: "center",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.15)",
    boxSizing: "border-box",
    border: "2px solid transparent",
  },

  cardTitle: {
    marginTop: 0,
    marginBottom: "24px",
    fontSize: "24px",
    color: "#1F2937",
  },

  primaryButton: {
    width: "100%",
    minHeight: "48px",
    padding: "12px 16px",
    marginBottom: "16px",
    backgroundColor: "#0F4C5C",
    color: "#FFFFFF",
    border: "2px solid #0F4C5C",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "700",
  },

  secondaryButton: {
    width: "100%",
    minHeight: "48px",
    padding: "12px 16px",
    backgroundColor: "#FFFFFF",
    color: "#0F4C5C",
    border: "2px solid #0F4C5C",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "700",
  },

  contraste: {
    container: {
      backgroundColor: "#000000",
      color: "#FFFFFF",
    },

    header: {
      backgroundColor: "#000000",
      borderBottom: "2px solid #FFFF00",
    },

    headerTitle: {
      color: "#FFFFFF",
    },

    contrastButton: {
      backgroundColor: "#FFFF00",
      color: "#000000",
      border: "2px solid #FFFF00",
      outline: "2px solid #FFFFFF",
      outlineOffset: "2px",
    },

    card: {
      backgroundColor: "#000000",
      border: "2px solid #FFFF00",
      boxShadow: "none",
    },

    cardTitle: {
      color: "#FFFF00",
    },

    primaryButton: {
      backgroundColor: "#FFFF00",
      color: "#000000",
      border: "2px solid #FFFF00",
    },

    secondaryButton: {
      backgroundColor: "#000000",
      color: "#FFFFFF",
      border: "2px solid #FFFFFF",
    },
  },
};

export default Home;