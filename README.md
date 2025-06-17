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

- `PUT /api/products/:pid`  
  Actualiza los campos de un producto.

- `DELETE /api/products/:pid`  
  Elimina un producto por ID.

---

### 🛒 Carritos (`/api/carts`)

- `POST /api/carts`  
  Crea un nuevo carrito.

- `GET /api/carts/:cid`  
  Lista los productos de un carrito específico.

- `POST /api/carts/:cid/product/:pid`  
  Agrega un producto al carrito (o incrementa su cantidad si ya está). No requiere body.

---

## 💾 Persistencia

Toda la información se guarda en archivos JSON:

- `products.json`: guarda los productos
- `carts.json`: guarda los carritos

---

## ⚠️ Notas

- El campo `id` se autogenera usando `Date.now().toString()`.
- El proyecto **no sube la carpeta `node_modules`** ya que está incluida en `.gitignore`.

---

## 👨‍💻 Autor

Entrega realizada por **Omar Cáceres**  
Curso de **Backend Node.js**