function NaoEncontrado({
  mudarPagina,
  altoContraste,
  alternarContraste,
}) {
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
          onClick={alternarContraste}
          aria-pressed={altoContraste}
          aria-label={
            altoContraste
              ? "Desativar alto contraste"
              : "Ativar alto contraste"
          }
          style={{
            ...styles.contrastButton,
            ...(altoContraste
              ? styles.contraste.contrastButton
              : {}),
          }}
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
          aria-labelledby="titulo-pagina"
        >
          <h2
            id="titulo-pagina"
            style={{
              ...styles.title,
              ...(altoContraste ? styles.contraste.title : {}),
            }}
          >
            Solicitação não encontrada
          </h2>

          <p
            style={{
              ...styles.text,
              ...(altoContraste ? styles.contraste.text : {}),
            }}
          >
            Não foi possível localizar uma solicitação com o CPF informado.
          </p>

          <p
            style={{
              ...styles.text,
              ...(altoContraste ? styles.contraste.text : {}),
            }}
          >
            Verifique os dados e tente novamente.
          </p>

          <button
            type="button"
            style={{
              ...styles.primaryButton,
              ...(altoContraste
                ? styles.contraste.primaryButton
                : {}),
            }}
            onClick={() => mudarPagina("acompanhar")}
          >
            Tentar novamente
          </button>

          <button
            type="button"
            style={{
              ...styles.secondaryButton,
              ...(altoContraste
                ? styles.contraste.secondaryButton
                : {}),
            }}
            onClick={() => mudarPagina("home")}
          >
            Voltar ao início
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
    fontFamily: "Arial, sans-serif",
  },

  header: {
    width: "100%",
    backgroundColor: "#0F4C5C",
    color: "#FFFFFF",
    padding: "18px 20px",
    boxSizing: "border-box",
    textAlign: "center",
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
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "70px 20px",
    boxSizing: "border-box",
  },

  card: {
    marginTop: 0,
    padding: "32px",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "420px",
    textAlign: "center",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.15)",
    boxSizing: "border-box",
    border: "2px solid transparent",
  },

  title: {
    marginTop: 0,
    marginBottom: "24px",
    fontSize: "24px",
    color: "#1F2937",
  },

  text: {
    marginBottom: "10px",
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#1F2937",
  },

  primaryButton: {
    width: "100%",
    minHeight: "48px",
    padding: "12px 16px",
    marginTop: "20px",
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
    marginTop: "10px",
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

    title: {
      color: "#FFFF00",
    },

    text: {
      color: "#FFFFFF",
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

export default NaoEncontrado;