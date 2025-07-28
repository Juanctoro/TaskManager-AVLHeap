const BASE_URL = "http://localhost:8000";

export const getTareas = async () => {
  const res = await fetch(`${BASE_URL}/tareas`);
  return res.json();
};

export const createTarea = async (tarea) => {
  await fetch(`${BASE_URL}/tareas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tarea)
  });
};

export const deleteTarea = async (id) => {
  await fetch(`${BASE_URL}/tareas/${id}`, {
    method: "DELETE"
  });
};

export const getTopTarea = async () => {
  const res = await fetch(`${BASE_URL}/tareas/prioritaria`);
  if (!res.ok) throw new Error("No top task");
  return res.json();
};

export async function getTareaById(id) {
  console.log(`Fetching task with ID: ${id}`);
  console.log('tipo de dato:', typeof id);
  const res = await fetch(`${BASE_URL}/tareas/${id}`);
  if (!res.ok) throw new Error("Tarea no encontrada");
  return await res.json();
}