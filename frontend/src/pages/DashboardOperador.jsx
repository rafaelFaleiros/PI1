import { useState, useEffect } from "react";

function DashboardOperador({ mudarPagina }) {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/solicitacoes")
      .then((res) => res.json())
      .then((dados) => setLista(dados));
  }, []);

  async function mudarStatus(id, novoStatus) {
    try {
      await fetch(`http://localhost:3001/api/solicitacoes/${id}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status_atual: novoStatus }),
      });
      window.location.reload();
    } catch (error) {
      alert("Erro ao atualizar status.");
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        Painel de Gestão Administrativa - Ituverava
      </div>

      <div style={styles.tableContainer}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ color: "#1e3a8a" }}>Solicitações Recebidas</h2>
          <button style={styles.btnSair} onClick={() => mudarPagina("login")}>Sair</button>
        </div>

        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHead}>
              <th style={styles.th}>Protocolo</th>
              <th style={styles.th}>CPF Solicitante</th>
              <th style={styles.th}>Local</th>
              <th style={styles.th}>Descrição</th>
              <th style={styles.th}>Data</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {lista.map((item) => (
              <tr key={item.id} style={styles.tr}>
                <td style={styles.td}>{item.numero_protocolo}</td>
                <td style={styles.td}>{item.id_requerente}</td>
                <td style={styles.td}>{item.local_ocorrencia}</td>
                <td style={styles.td}>
                  <div style={styles.scrollText}>{item.descricao_ocorrencia}</div>
                </td>
                <td style={styles.td}>{new Date(item.createdAt).toLocaleDateString()}</td>
                <td style={styles.td}>
                  <span style={getStatusStyle(item.status_atual)}>
                    {item.status_atual}
                  </span>
                </td>
                <td style={styles.td}>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <button style={styles.btnAnalise} onClick={() => mudarStatus(item.id, "Em análise")}>Analisar</button>
                    <button style={styles.btnConcluir} onClick={() => mudarStatus(item.id, "Concluído")}>Concluir</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Função auxiliar para cores do status
const getStatusStyle = (status) => {
  let color = "#666";
  if (status === "Em análise") color = "#f59e0b";
  if (status === "Concluído") color = "#10b981";
  return {
    backgroundColor: color + "20",
    color: color,
    padding: "5px 10px",
    borderRadius: "15px",
    fontSize: "12px",
    fontWeight: "bold",
  };
};

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
  tableContainer: {
    marginTop: "40px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "95%",
    maxWidth: "1100px",
    boxShadow: "0 0 15px rgba(0,0,0,0.1)",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  tableHead: {
    backgroundColor: "#f8fafc",
    borderBottom: "2px solid #e2e8f0",
  },
  th: {
    padding: "12px",
    textAlign: "left",
    color: "#475569",
    fontSize: "14px",
  },
  td: {
    padding: "12px",
    borderBottom: "1px solid #f1f5f9",
    fontSize: "13px",
    color: "#1e293b",
  },
  scrollText: {
    maxWidth: "200px",
    maxHeight: "50px",
    overflowY: "auto",
    fontSize: "12px",
    lineHeight: "1.4",
  },
  btnAnalise: {
    backgroundColor: "#f59e0b",
    color: "white",
    border: "none",
    padding: "6px 10px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "11px",
  },
  btnConcluir: {
    backgroundColor: "#10b981",
    color: "white",
    border: "none",
    padding: "6px 10px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "11px",
  },
  btnSair: {
    backgroundColor: "#ef4444",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  }
};

export default DashboardOperador;