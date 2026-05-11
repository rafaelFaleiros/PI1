import { useState, useEffect } from "react";

function DashboardOperador() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/solicitacoes")
      .then(res => res.json())
      .then(dados => setLista(dados));
  }, []);

  async function mudarStatus(id, novoStatus) {
    await fetch(`http://localhost:3001/api/solicitacoes/${id}/status`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status_atual: novoStatus })
    });
    window.location.reload(); // Recarrega para ver a mudança
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Painel de Gestão - Ituverava</h1>
      <table border="1" style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
        <thead style={{ backgroundColor: "#1e3a8a", color: "white" }}>
          <tr>
            <th>Protocolo</th>
            <th>Solicitante</th>
            <th>Data</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {lista.map(item => (
            <tr key={item.id}>
              <td>{item.numero_protocolo}</td>
              <td>{item.nome_solicitante || item.id_requerente}</td>
              <td>{new Date(item.createdAt).toLocaleDateString()}</td>
              <td><strong>{item.status_atual}</strong></td>
              <td>
                <button onClick={() => mudarStatus(item.id, "Em Análise")}>Analisar</button>
                <button onClick={() => mudarStatus(item.id, "Concluído")}>Concluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardOperador;