// src/App.jsx
import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TopPriority from "./components/TopPriority";
import TaskSearch from "./components/TaskSearch";
import { getTareas } from "./services/api";

function App() {
  const [tareas, setTareas] = useState([]);
  const [refreshTop, setRefreshTop] = useState(0);

  const fetchTareas = async () => {
    const data = await getTareas();
    setTareas(data);
    setRefreshTop((r) => r + 1); // Actualiza refreshTop cada vez que se agregue/actualice una tarea
  };

  useEffect(() => {
    fetchTareas();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">Gestor de Tareas</h1>
        <TaskForm onAdd={fetchTareas} />
        <TopPriority refresh={refreshTop} />
        <TaskSearch />
        <TaskList tareas={tareas} onUpdate={fetchTareas} />
      </div>
    </div>
  );
}

export default App;