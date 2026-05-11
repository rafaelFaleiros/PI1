import { useState } from "react";
import Login from "./pages/Login";
import NovoRequerimento from "./pages/NovoRequerimento";
import Home from "./pages/Home";
import AcompanharSolicitacao from "./pages/AcompanharSolicitacao";
import SolicitacaoEnviada from "./pages/SolicitacaoEnviada";
import StatusSolicitacao from "./pages/StatusSolicitacao";
import NaoEncontrado from "./pages/NaoEncontrado";
import DashboardOperador from "./pages/DashboardOperador"; // Importamos a nova tela

function App() {
  const [pagina, setPagina] = useState("login");
  // Estado para armazenar o status que vem do banco de dados
  const [statusAtual, setStatusAtual] = useState("");

  return (
    <>
      {pagina === "login" && <Login mudarPagina={setPagina} />}

      {pagina === "home" && <Home mudarPagina={setPagina} />}

      {pagina === "requerimento" && (
        <NovoRequerimento mudarPagina={setPagina} />
      )}

      {pagina === "acompanhar" && (
        <AcompanharSolicitacao 
          mudarPagina={setPagina} 
          setStatusRemoto={setStatusAtual} // Passamos a função para salvar o status buscado
        />
      )}

      {pagina === "sucesso" && (
        <SolicitacaoEnviada mudarPagina={setPagina} />
      )}

      {/* Unificamos as telas de status em uma única, usando o dado real do banco */}
      {pagina === "status" && (
        <StatusSolicitacao
          status={statusAtual}
          mudarPagina={setPagina}
        />
      )}

      {pagina === "naoEncontrado" && (
        <NaoEncontrado mudarPagina={setPagina} />
      )}

      {/* Nova rota para o painel de gestão da prefeitura */}
      {pagina === "dashboard" && (
        <DashboardOperador mudarPagina={setPagina} />
      )}
    </>
  );
}

export default App;