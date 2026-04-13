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

  return (
    <>
      {pagina === "login" && <Login mudarPagina={setPagina} />}

      {pagina === "home" && <Home mudarPagina={setPagina} />}

      {pagina === "requerimento" && (
        <NovoRequerimento mudarPagina={setPagina} />
      )}

      {pagina === "acompanhar" && (
        <AcompanharSolicitacao mudarPagina={setPagina} />
      )}

      {pagina === "sucesso" && (
        <SolicitacaoEnviada mudarPagina={setPagina} />
      )}

      {pagina === "statusEmAnalise" && (
        <StatusSolicitacao
          status="Em análise"
          mudarPagina={setPagina}
        />
      )}

      {pagina === "statusConcluido" && (
        <StatusSolicitacao
          status="Concluído"
          mudarPagina={setPagina}
        />
      )}

      {pagina === "naoEncontrado" && (
        <NaoEncontrado mudarPagina={setPagina} />
      )}
    </>
  );
}

export default App;