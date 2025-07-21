// src/components/TaskForm.jsx
import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [form, setForm] = useState({
    id: "",
    descripcion: "",
    prioridad: "media",
    vencimiento: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTarea({ ...form, id: Number(form.id) });
    setForm({ id: "", descripcion: "", prioridad: "media", vencimiento: "" });
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          name="id"
          type="number"
          placeholder="ID"
          className="border text-black border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={form.id}
          onChange={handleChange}
          required
        />
        <input
          name="descripcion"
          placeholder="Descripción"
          className="border text-black border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={form.descripcion}
          onChange={handleChange}
          required
        />
        <select
          name="prioridad"
          className="border text-black border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={form.prioridad}
          onChange={handleChange}
        >
          <option value="alta">Alta</option>
          <option value="media">Media</option>
          <option value="baja">Baja</option>
        </select>
        <input
          name="vencimiento"
          type="date"
          className="border text-black border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={form.vencimiento}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        class="mt-10 text-black b-white inset-shadow-sm cursor-pointer items-center justify-center rounded-xl px-5 py-3 font-medium shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl">
        Agregar tarea
      </button>
    </form>
  );
}
