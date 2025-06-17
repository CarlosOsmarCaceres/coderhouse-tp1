# 🛍️ Backend - API de Productos y Carritos

Este proyecto es parte de la **Primera Entrega** del curso de Backend. Consiste en una API REST construida con **Node.js** y **Express**, que permite gestionar productos y carritos de compras, con persistencia de datos en archivos `.json`.

---

## 📂 Estructura del Proyecto

```
backend-entrega1/
├── data/
│   ├── products.json       # Base de datos de productos
│   └── carts.json          # Base de datos de carritos
│
├──   managers/
│     ├── ProductManager.js   # Lógica para manejar productos
│     └── CartManager.js      # Lógica para manejar carritos
│
├──   routes/
│     ├── products.router.js  # Rutas para productos
│     └── carts.router.js     # Rutas para carritos
│
├── index.js                # Archivo principal del servidor
├── package.json
└── .gitignore
```

---

## 🚀 Instalación y ejecución

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd backend-entrega1
   ```

2. Instalá las dependencias:
   ```bash
   npm install
   ```

3. Ejecutá el servidor:
   ```bash
   nodemon index.js
   ```

El servidor estará escuchando en:
```
http://localhost:8080
```

---

## 🧪 Prueba de Endpoints (Postman)

### 📦 Productos (`/api/products`)

- `GET /api/products`  
  Obtiene todos los productos.

- `GET /api/products/:pid`  
  Obtiene un producto por ID.

- `POST /api/products`  
  Agrega un nuevo producto.  
  **Body JSON:**
  ```json
  {
    "title": "Ejemplo",
    "description": "Producto de prueba",
    "code": "XYZ123",
    "price": 100,
    "status": true,
    "stock": 50,
    "category": "tecnología",
    "thumbnails": ["img1.jpg", "img2.jpg"]
  }
  ```

## 💾 Persistencia

Toda la información se guarda en archivos JSON:

- `products.json`: guarda los productos
- `carts.json`: guarda los carritos


---

## 👨‍💻 Autor

Entrega realizada por **Carlos Osmar Cáceres**  
Curso de **Backend Node.js**