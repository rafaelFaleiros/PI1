import { useState } from "react";

function Login({ mudarPagina }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function entrar(e) {
    e.preventDefault();

    if (!email || !senha) {
      alert("Preencha tudo!");
      return;
    }

    mudarPagina("requerimento");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login</h2>

      <form onSubmit={entrar}>
        <input
          type="email"
          placeholder="Email"
          style={{ padding: "10px", margin: "10px", width: "200px" }}
        />

        <input
          type="password"
          placeholder="Senha"
          style={{ padding: "10px", margin: "10px", width: "200px" }}
        />

        <button style={{ padding: "10px", marginTop: "10px" }}>
            Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;