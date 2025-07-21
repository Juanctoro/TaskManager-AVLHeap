import { useEffect, useState } from "react";

export default function TopPriority() {
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
  }, []);

  if (!top) return null;

  return (
    <div className="mb-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded-lg shadow-sm">
      <p className="font-semibold text-yellow-800">Tarea más prioritaria:</p>
      <p className="text-gray-700">{top.descripcion} (ID: {top.id}, Prioridad: {top.prioridad})</p>
    </div>
  );
}
