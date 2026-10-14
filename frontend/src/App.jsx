import { useState } from "react";
import Login from "./pages/Login";
import NovoRequerimento from "./pages/NovoRequerimento";
import Home from "./pages/Home";
import AcompanharSolicitacao from "./pages/AcompanharSolicitacao";
import SolicitacaoEnviada from "./pages/SolicitacaoEnviada";
import StatusSolicitacao from "./pages/StatusSolicitacao";
import NaoEncontrado from "./pages/NaoEncontrado";

function App() {
  const [pagina, setPagina] = useState("login");

  const [altoContraste, setAltoContraste] = useState(() => {
    return localStorage.getItem("altoContraste") === "true";
  });

  function alternarContraste() {
    setAltoContraste((atual) => {
      const novoValor = !atual;

      localStorage.setItem("altoContraste", String(novoValor));

      return novoValor;
    });
  }

  const propriedadesAcessibilidade = {
    altoContraste,
    alternarContraste,
  };

  return (
    <div className={altoContraste ? "alto-contraste" : ""}>
      {pagina === "login" && (
        <Login
          mudarPagina={setPagina}
          {...propriedadesAcessibilidade}
        />
      )}

      {pagina === "home" && (
        <Home
          mudarPagina={setPagina}
          {...propriedadesAcessibilidade}
        />
      )}

      {pagina === "requerimento" && (
        <NovoRequerimento
          mudarPagina={setPagina}
          {...propriedadesAcessibilidade}
        />
      )}

      {pagina === "acompanhar" && (
        <AcompanharSolicitacao
          mudarPagina={setPagina}
          {...propriedadesAcessibilidade}
        />
      )}

      {pagina === "sucesso" && (
        <SolicitacaoEnviada
          mudarPagina={setPagina}
          {...propriedadesAcessibilidade}
        />
      )}

      {pagina === "statusEmAnalise" && (
        <StatusSolicitacao
          status="Em análise"
          mudarPagina={setPagina}
          {...propriedadesAcessibilidade}
        />
      )}

      {pagina === "statusConcluido" && (
        <StatusSolicitacao
          status="Concluído"
          mudarPagina={setPagina}
          {...propriedadesAcessibilidade}
        />
      )}

      {pagina === "naoEncontrado" && (
        <NaoEncontrado
          mudarPagina={setPagina}
          {...propriedadesAcessibilidade}
        />
      )}
    </div>
  );
}

export default App;