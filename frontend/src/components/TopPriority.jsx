import { useEffect, useState } from "react";
import { getTopTarea } from "../services/api";

export default function TopPriority({ refresh }) {
  const [top, setTop] = useState(null);

  useEffect(() => {
    const fetchTop = async () => {
      try {
        const tarea = await getTopTarea();
        setTop(tarea);
      } catch {
        setTop(null);
      }
    };
    fetchTop();
  }, [refresh]);

  if (!top) return (
    <div className="mb-4 p-4 bg-red-100 border-l-4 border-red-500 rounded">
      <p className="font-medium">No hay tareas prioritarias.</p>
    </div>
  );

  return (
    <div className="mb-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded">
      <p className="font-medium">Tarea más prioritaria:</p>
      <p>{top.descripcion} (ID: {top.id}, Prioridad: {top.prioridad})</p>
    </div>
  );
}