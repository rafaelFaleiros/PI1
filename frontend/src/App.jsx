import { useState } from "react";
import Login from "./pages/Login";
import Requerimento from "./pages/Requerimento";

function App() {
  const [pagina, setPagina] = useState("login");

  return (
    <>
      {pagina === "login" && <Login mudarPagina={setPagina} />}
      {pagina === "requerimento" && <Requerimento />}
    </>
  );
}

export default App;