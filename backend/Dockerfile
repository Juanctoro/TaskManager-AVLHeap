FROM python:3.11-slim

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del backend
COPY . /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Expone el puerto por defecto de FastAPI
EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]