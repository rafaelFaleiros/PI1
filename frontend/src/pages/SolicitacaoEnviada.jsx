function SolicitacaoEnviada({
  mudarPagina,
  altoContraste,
  alternarContraste,
}) {
  const cores = altoContraste
    ? {
        fundo: "#000000",
        cartao: "#000000",
        texto: "#FFFFFF",
        destaque: "#FFFF00",
        textoDestaque: "#000000",
        borda: "#FFFF00",
      }
    : {
        fundo: "#F4F7F7",
        cartao: "#FFFFFF",
        texto: "#1F2933",
        destaque: "#006B6B",
        textoDestaque: "#FFFFFF",
        borda: "#AABFC0",
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
          backgroundColor: altoContraste ? "#000000" : "#004F4F",
          borderBottom: altoContraste
            ? "2px solid #FFFF00"
            : "none",
        }}
      >
        <div style={styles.headerContent}>
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
              color: altoContraste ? "#000000" : "#004F4F",
              border: "2px solid #FFFF00",
            }}
          >
            {altoContraste
              ? "Desativar alto contraste"
              : "Ativar alto contraste"}
          </button>
        </div>
      </header>

      <main style={styles.main}>
        <section
          style={{
            ...styles.card,
            backgroundColor: cores.cartao,
            border: `1px solid ${cores.borda}`,
          }}
          aria-labelledby="titulo-pagina"
        >
          <div
            style={{
              ...styles.successIcon,
              backgroundColor: cores.destaque,
              color: cores.textoDestaque,
              border: altoContraste
                ? "2px solid #FFFF00"
                : "none",
            }}
            aria-hidden="true"
          >
            ✓
          </div>

          <h2
            id="titulo-pagina"
            style={{
              ...styles.title,
              color: altoContraste ? cores.destaque : "#004F4F",
            }}
          >
            Solicitação enviada!
          </h2>

          <p
            style={{
              ...styles.text,
              color: cores.texto,
            }}
          >
            Sua solicitação foi enviada com sucesso.
          </p>

          <p
            style={{
              ...styles.text,
              color: cores.texto,
            }}
          >
            Você poderá acompanhar o andamento utilizando seu CPF.
          </p>

          <button
            type="button"
            style={{
              ...styles.primaryButton,
              backgroundColor: cores.destaque,
              color: cores.textoDestaque,
              border: altoContraste
                ? "2px solid #FFFF00"
                : "none",
            }}
            onClick={() => mudarPagina("home")}
          >
            Voltar para o início
          </button>

          <button
            type="button"
            style={{
              ...styles.secondaryButton,
              backgroundColor: altoContraste ? "#000000" : "#FFFFFF",
              color: altoContraste ? "#FFFF00" : "#004F4F",
              border: `2px solid ${cores.destaque}`,
            }}
            onClick={() => mudarPagina("acompanhar")}
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
    display: "flex",
    flexDirection: "column",
    fontFamily: "Arial, sans-serif",
  },

  header: {
    width: "100%",
    color: "#FFFFFF",
    boxSizing: "border-box",
  },

  headerContent: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "18px 20px",
    textAlign: "center",
  },

  headerTitle: {
    margin: 0,
    fontSize: "20px",
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
    padding: "60px 20px",
    boxSizing: "border-box",
  },

  card: {
    width: "100%",
    maxWidth: "480px",
    borderRadius: "12px",
    padding: "32px",
    boxSizing: "border-box",
    textAlign: "center",
    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.08)",
  },

  successIcon: {
    width: "56px",
    height: "56px",
    margin: "0 auto 18px auto",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "30px",
    fontWeight: "700",
  },

  title: {
    margin: "0 0 20px 0",
    fontSize: "28px",
    lineHeight: "1.3",
  },

  text: {
    margin: "0 0 12px 0",
    fontSize: "16px",
    lineHeight: "1.5",
  },

  primaryButton: {
    width: "100%",
    minHeight: "50px",
    padding: "12px 20px",
    marginTop: "24px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "700",
  },

  secondaryButton: {
    width: "100%",
    minHeight: "50px",
    padding: "12px 20px",
    marginTop: "12px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "700",
  },
};

export default SolicitacaoEnviada;