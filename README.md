# 📌 TaskManager AVLHeap

Gestor de tareas con prioridad, implementado con estructuras de datos avanzadas: **árbol AVL** para búsquedas eficientes por ID y **montículo binario (heap)** para priorizar tareas.

---

## 🛠 Tecnologías

- **Backend**: Python + FastAPI
- **Frontend**: React + Tailwind CSS
- **Estructuras**: Árbol AVL, Min-Heap
- **Opcional**: Docker + Docker Compose

---

## 🚀 ¿Qué hace este sistema?

- ✅ Permite registrar tareas con ID, descripción, prioridad y fecha de vencimiento.
- 🔍 Busca tareas por ID rápidamente usando un **árbol AVL**.
- ⏫ Muestra siempre la tarea más prioritaria usando un **min-heap**.
- 🗑 Permite eliminar tareas de ambas estructuras.

---

## 📦 Instalación local

### 1. Clona el repositorio

```bash
git clone git@github.com:Juanctoro/TaskManager-AVLHeap.git
cd taskmanager-avlheap
```
### 2. Backend (FastAPI)
```bash
cd backend
pip install fastapi uvicorn
uvicorn main:app --reload
```
### 3. Frontend (React + Vite)
```bash
cd ../frontend
npm install
npm run dev
```

### 🐳 Docker (opcional)
```bash
docker-compose up --build
```

API: http://127.0.0.1:8000/

Frontend: http://localhost:5173


Desarrollado por Juan Toro, Reinel Fabian Vargas y Juan Jose Rojas – [Universidad del Valle]

Julio 2025