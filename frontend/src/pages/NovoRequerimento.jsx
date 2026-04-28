import { useState } from "react";

function NovoRequerimento({ mudarPagina }) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [data, setData] = useState("");
  const [local, setLocal] = useState("");
  const [motivo, setMotivo] = useState("");
  const [descricao, setDescricao] = useState("");

  async function enviar(e) {
    e.preventDefault();
    alert("A função enviar foi chamada!");
  
    // 1. Validação básica antes de gastar internet
    if (!nome || !cpf || !email) {
      alert("Preencha os campos obrigatórios!");
      return;
    }
  
    // 2. Monta o objeto exatamente como o seu Backend espera
    const dadosSolicitacao = {
      nome_solicitante: nome,
      id_requerente: cpf,
      email: email,
      telefone: telefone,
      data_ocorrencia: data ? new Date(data) : new Date(),
      local_ocorrencia: local,
      motivo: motivo,
      descricao_ocorrencia: descricao,
      status_atual: "Pendente",
      numero_protocolo: "ITV-" + Date.now(), // Gera um protocolo simples
    };
  
    try {
      // 3. O FETCH: Chama o seu container do Backend na porta 3001
      const resposta = await fetch("http://localhost:3001/api/solicitacoes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosSolicitacao)
      });
  
      if (resposta.ok) {
        alert("Sucesso! Sua solicitação foi salva no banco de dados.");
        mudarPagina("sucesso"); // Vai para a tela de confirmação
      } else {
        const erro = await resposta.json();
        alert("Erro no servidor: " + (erro.error || "Falha ao salvar"));
      }
    } catch (error) {
      console.error("Erro na conexão:", error);
      alert("O Backend está desligado ou o Docker travou!");
    }
  }

  return (
    <div style={styles.container}>
      
      {/* TOPO */}
      <div style={styles.header}>
        Sistema Digital de Requerimentos
      </div>

      {/* CARD */}
      <div style={styles.card}>
        <h2>Novo Requerimento</h2>
        <p style={{ fontSize: "12px" }}>
          Campos marcados com (*) são obrigatórios.
        </p>

        <form onSubmit={enviar}>

          <input placeholder="Nome do solicitante *" style={styles.input} onChange={(e) => setNome(e.target.value)} />

          <input placeholder="CPF *" style={styles.input} onChange={(e) => setCpf(e.target.value)} />

          <input placeholder="Email *" style={styles.input} onChange={(e) => setEmail(e.target.value)} />

          <input placeholder="Telefone *" style={styles.input} onChange={(e) => setTelefone(e.target.value)} />

          <input placeholder="Data do ocorrido *" style={styles.input} onChange={(e) => setData(e.target.value)} />

          <input placeholder="Local da ocorrência *" style={styles.input} onChange={(e) => setLocal(e.target.value)} />

          <input placeholder="Motivo da solicitação *" style={styles.input} onChange={(e) => setMotivo(e.target.value)} />

          <textarea placeholder="Descrição da solicitação *" style={styles.textarea} onChange={(e) => setDescricao(e.target.value)} />

          <input type="file" style={styles.input} />

          <div style={styles.checkboxContainer}>
            <input type="checkbox" />
            <span> Declaro que as informações fornecidas são verdadeiras.</span>
          </div>

          <button style={styles.button}>Enviar solicitação</button>

        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#dcdcdc",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  header: {
    width: "100%",
    backgroundColor: "#1e3a8a",
    color: "#fff",
    padding: "15px",
    textAlign: "center",
    fontWeight: "bold",
  },

  card: {
    marginTop: "40px",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    boxSizing: "border-box"
  },

  textarea: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    height: "100px",
    boxSizing: "border-box"
  },

  checkboxContainer: {
    marginTop: "10px",
    fontSize: "12px",
  },

  button: {
    width: "100%",
    marginTop: "20px",
    padding: "12px",
    backgroundColor: "#2d5be3",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default NovoRequerimento;