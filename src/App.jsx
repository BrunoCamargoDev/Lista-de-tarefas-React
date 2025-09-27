import { useState } from "react"
import './App.css'

const App = () => {
  const [tarefa, setTarefa] = useState("") // guarda o texto digitado
  const [lista, setLista] = useState([])   // guarda todas as tarefas

  // Função para adicionar nova tarefa
  const adicionarTarefa = () => {
    if (tarefa.trim() === "") return // evita adicionar vazio
    setLista([...lista, tarefa])
    setTarefa("") // limpa o input
  }

  // Função para remover tarefa
  const removerTarefa = (index) => {
    const novaLista = lista.filter((_, i) => i !== index)
    setLista(novaLista)
  }

  return (
    <div style={{ textAlign: "center"}}>
      <h1>Lista de Tarefas ✅</h1>

      {/* Input controlado */}
      <input
        type="text"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {lista.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => removerTarefa(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

