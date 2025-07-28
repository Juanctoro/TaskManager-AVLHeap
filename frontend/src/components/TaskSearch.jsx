// src/components/TaskSearch.jsx
import { useState } from "react";
import { getTareaById } from "../services/api";

export default function TaskSearch() {
  const [id, setId] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    const numericId = Number(id);

    if (!id || isNaN(numericId)) {
      setResult(null);
      setError("Por favor ingresa un ID válido");
      return;
    }

    try {
      const tarea = await getTareaById(numericId);
      setResult(tarea);
      setError("");
    } catch (err) {
      setResult(null);
      setError("Tarea no encontrada");
    }
  };

  return (
    <div className="mb-4">
      <div className="flex gap-2 mb-2">
        <input
          type="number"
          placeholder="Buscar tarea por ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={handleSearch}
          className="text-black b-white inset-shadow-sm cursor-pointer items-center justify-center rounded-xl px-5 py-3 font-medium shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl"
        >
          Buscar
        </button>
      </div>

      {result && (
        <div className="p-4 bg-green-100 rounded border border-green-400">
          <p className="font-medium">Resultado:</p>
          <p>
            {result.descripcion} (ID: {result.id}, Prioridad: {result.prioridad}, Vence: {result.vencimiento})
          </p>
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-100 rounded border border-red-400">
          {error}
        </div>
      )}
    </div>
  );
}
