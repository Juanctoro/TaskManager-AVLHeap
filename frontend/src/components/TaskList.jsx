import { deleteTarea } from "../services/api";
import { FaCheckCircle  } from "react-icons/fa";

export default function TaskList({ tareas, onUpdate }) {
  const handleDelete = async (id) => {
    await deleteTarea(id);
    onUpdate();
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Lista de Tareas</h2>
      <ul>
        {tareas.map((t) => (
          <li key={t.id} className="flex justify-between border-b py-2">
            <span>{t.descripcion} (ID: {t.id}, Prioridad: {t.prioridad}, Vence: {t.vencimiento})</span>
            <button onClick={() => handleDelete(t.id)} className="text-green-600 hover:text-green-800 text-lg" title="Marcar como completada">
              <FaCheckCircle  />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}