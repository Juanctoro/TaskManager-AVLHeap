# --- backend/models.py ---
class Tarea:
    def __init__(self, id, descripcion, prioridad, vencimiento):
        self.id = id
        self.descripcion = descripcion
        self.prioridad = prioridad
        self.vencimiento = vencimiento

    def __lt__(self, other):
        return self.prioridad < other.prioridad

    def __eq__(self, other):
        return self.id == other.id

    def to_dict(self):
        return {
            "id": self.id,
            "descripcion": self.descripcion,
            "prioridad": self.prioridad,
            "vencimiento": self.vencimiento
        }