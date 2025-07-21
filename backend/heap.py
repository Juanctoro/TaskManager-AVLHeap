class Heap:
    def __init__(self):
        self.heap = []

    def insert(self, tarea):
        self.heap.append(tarea)
        self._heapify_up(len(self.heap) - 1)

    def get_min(self):
        return self.heap[0] if self.heap else None

    def remove(self, tarea_id):
        for i, t in enumerate(self.heap):
            if t.id == tarea_id:
                self.heap[i] = self.heap[-1]
                self.heap.pop()
                self._heapify_down(i)
                return

    def _heapify_up(self, index):
        parent = (index - 1) // 2
        if index > 0 and self.heap[index] < self.heap[parent]:
            self.heap[index], self.heap[parent] = self.heap[parent], self.heap[index]
            self._heapify_up(parent)

    def _heapify_down(self, index):
        smallest = index
        left = 2 * index + 1
        right = 2 * index + 2
        if left < len(self.heap) and self.heap[left] < self.heap[smallest]:
            smallest = left
        if right < len(self.heap) and self.heap[right] < self.heap[smallest]:
            smallest = right
        if smallest != index:
            self.heap[index], self.heap[smallest] = self.heap[smallest], self.heap[index]
            self._heapify_down(smallest)