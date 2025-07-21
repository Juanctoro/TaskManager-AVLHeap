

export default function TaskList({ tareas, onUpdate }) {
  const handleDelete = async (id) => {
    await deleteTarea(id);
    onUpdate();
  };

  const colorByPrioridad = {
    alta: "bg-red-50 border-red-300",
    media: "bg-yellow-50 border-yellow-300",
    baja: "bg-green-50 border-green-300"
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Lista de Tareas</h2>
      <ul className="space-y-3">
        {tareas.map((t) => (
          <li
            key={t.id}
            className={`flex justify-between items-center p-4 border-l-4 ${colorByPrioridad[t.prioridad]} rounded-lg shadow-sm`}
          >
            <div>
              <p className="text-gray-800 font-medium">{t.descripcion}</p>
              <p className="text-sm text-gray-500">ID: {t.id} · Prioridad: {t.prioridad} · Vence: {t.vencimiento}</p>
            </div>
            <button
              onClick={() => handleDelete(t.id)}
              className="text-red-600 hover:text-red-800 font-semibold transition"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
