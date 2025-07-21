// src/App.jsx
import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TopPriority from "./components/TopPriority";

function App() {
  const [tareas, setTareas] = useState([]);

  const fetchTareas = async () => {
    const data = await getTareas();
    setTareas(data);
  };

  useEffect(() => {
    fetchTareas();
  }, []);

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">🗂️ Gestor de Tareas</h1>
        <TaskForm onAdd={fetchTareas} />
        <TopPriority />
        <TaskList tareas={tareas} onUpdate={fetchTareas} />
      </div>
    </div>
  );
}

export default App;
