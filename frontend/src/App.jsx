import { useState } from "react";
import Login from "./pages/Login";
import NovoRequerimento from "./pages/NovoRequerimento";
import Home from "./pages/Home";

function App() {
  const [pagina, setPagina] = useState("home");

  return (
    <>
      {pagina === "login" && <Login mudarPagina={setPagina} />}
      {pagina === "home" && <Home mudarPagina={setPagina} />}
      {pagina === "requerimento" && <NovoRequerimento />}
    </>
  );
}

export default App;