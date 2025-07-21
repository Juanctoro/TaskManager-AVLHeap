# --- backend/main.py ---
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from heap import Heap
from avl import AVLTree
from models import Tarea
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

heap = Heap()
avl = AVLTree()

class TareaRequest(BaseModel):
    id: int
    descripcion: str
    prioridad: str  # "alta", "media", "baja"
    vencimiento: str  # YYYY-MM-DD

prioridad_map = {"alta": 1, "media": 2, "baja": 3}

@app.get("/")
def read_root():
    return {"Welcome to TaskManager AVLHeap"}

@app.post("/tareas")
def agregar_tarea(t: TareaRequest):
    if prioridad_map.get(t.prioridad) is None:
        raise HTTPException(status_code=400, detail="Prioridad inválida")
    tarea = Tarea(t.id, t.descripcion, prioridad_map[t.prioridad], t.vencimiento)
    heap.insert(tarea)
    avl.insert(tarea)
    return {"mensaje": "Tarea agregada exitosamente"}

@app.get("/tareas")
def listar_tareas():
    return avl.inorder()

@app.get("/tareas/prioritaria")
def tarea_prioritaria():
    tarea = heap.get_min()
    if tarea:
        return tarea.to_dict()
    raise HTTPException(status_code=404, detail="No hay tareas")

@app.get("/tareas/{id}")
def obtener_tarea(id: int):
    tarea = avl.buscar(id)
    if tarea:
        return tarea.to_dict()
    raise HTTPException(status_code=404, detail="Tarea no encontrada")

@app.delete("/tareas/{id}")
def eliminar_tarea(id: int):
    tarea = avl.buscar(id)
    if not tarea:
        raise HTTPException(status_code=404, detail="Tarea no encontrada")
    avl.eliminar(id)
    heap.remove(id)
    return {"mensaje": "Tarea eliminada"}

