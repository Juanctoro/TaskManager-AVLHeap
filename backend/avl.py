# --- backend/avl.py ---
class AVLNode:
    def __init__(self, tarea):
        self.tarea = tarea
        self.left = None
        self.right = None
        self.height = 1

class AVLTree:
    def __init__(self):
        self.root = None

    def insert(self, tarea):
        self.root = self._insert(self.root, tarea)

    def _insert(self, node, tarea):
        if not node:
            return AVLNode(tarea)
        if tarea.id == node.tarea.id:
            node.tarea = tarea
            return node
        if tarea.id < node.tarea.id:
            node.left = self._insert(node.left, tarea)
        elif tarea.id > node.tarea.id:
            node.right = self._insert(node.right, tarea)
        node.height = 1 + max(self.get_height(node.left), self.get_height(node.right))
        return self._balance(node)

    def eliminar(self, tarea_id):
        self.root = self._eliminar(self.root, tarea_id)

    def _eliminar(self, node, id):
        if not node:
            return node
        if id < node.tarea.id:
            node.left = self._eliminar(node.left, id)
        elif id > node.tarea.id:
            node.right = self._eliminar(node.right, id)
        else:
            if not node.left:
                return node.right
            elif not node.right:
                return node.left
            min_larger_node = self._min_value_node(node.right)
            node.tarea = min_larger_node.tarea
            node.right = self._eliminar(node.right, min_larger_node.tarea.id)
        node.height = 1 + max(self.get_height(node.left), self.get_height(node.right))
        return self._balance(node)

    def buscar(self, id):
        return self._buscar(self.root, id)

    def _buscar(self, node, id):
        if not node:
            return None
        if id == node.tarea.id:
            return node.tarea
        if id < node.tarea.id:
            return self._buscar(node.left, id)
        else:
            return self._buscar(node.right, id)

    def inorder(self):
        res = []
        self._inorder(self.root, res)
        return [t.to_dict() for t in res]

    def _inorder(self, node, res):
        if node:
            self._inorder(node.left, res)
            res.append(node.tarea)
            self._inorder(node.right, res)

    def get_height(self, node):
        return node.height if node else 0

    def get_balance(self, node):
        return self.get_height(node.left) - self.get_height(node.right) if node else 0

    def _balance(self, node):
        balance = self.get_balance(node)
        if balance > 1:
            if self.get_balance(node.left) < 0:
                node.left = self._rotate_left(node.left)
            return self._rotate_right(node)
        if balance < -1:
            if self.get_balance(node.right) > 0:
                node.right = self._rotate_right(node.right)
            return self._rotate_left(node)
        return node

    def _rotate_left(self, z):
        y = z.right
        T2 = y.left
        y.left = z
        z.right = T2
        z.height = 1 + max(self.get_height(z.left), self.get_height(z.right))
        y.height = 1 + max(self.get_height(y.left), self.get_height(y.right))
        return y

    def _rotate_right(self, y):
        x = y.left
        T2 = x.right
        x.right = y
        y.left = T2
        y.height = 1 + max(self.get_height(y.left), self.get_height(y.right))
        x.height = 1 + max(self.get_height(x.left), self.get_height(x.right))
        return x

    def _min_value_node(self, node):
        while node.left:
            node = node.left
        return node
