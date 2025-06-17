// Importa el módulo fs con soporte para promesas para trabajar con archivos de forma asincrónica
import fs from 'fs/promises';

// Importa path para generar rutas absolutas que funcionen en cualquier sistema operativo
import path from 'path';

// Define la ruta absoluta al archivo donde se guardan los carritos (carts.json)
const filePath = path.resolve('data/carts.json');

// Exporta la clase CartManager
export default class CartManager {
    constructor() {
        // Guarda la ruta del archivo como propiedad de la clase
        this.path = filePath;
    }

    // Método privado para leer el archivo de carritos
    async _readFile() {
        try {
            const data = await fs.readFile(this.path, 'utf-8'); // Lee el contenido del archivo como texto
            return JSON.parse(data); // Convierte el texto a un array de objetos JS
        } catch {
            // Si el archivo no existe o hay error, devuelve un array vacío (cero carritos)
            return [];
        }
    }

    // Método privado para escribir datos en el archivo carts.json
    async _writeFile(data) {
        // Convierte el array de carritos en JSON y lo guarda en el archivo, con indentación de 2 espacios
        await fs.writeFile(this.path, JSON.stringify(data, null, 2));
    }

    // Método público para crear un nuevo carrito vacío
    async createCart() {
        const carts = await this._readFile(); // Carga los carritos existentes
        const newCart = {
            id: Date.now().toString(), // Genera un ID único como string usando timestamp
            products: [] // Inicializa el carrito con un array vacío de productos
        };
        carts.push(newCart); // Agrega el nuevo carrito al array
        await this._writeFile(carts); // Guarda los cambios
        return newCart; // Devuelve el carrito recién creado
    }

    // Método público para obtener un carrito específico por ID
    async getCartById(id) {
        const carts = await this._readFile(); // Lee los carritos del archivo
        return carts.find(c => c.id === id); // Busca el carrito con el ID solicitado
    }

    // Método público para agregar un producto a un carrito existente
    async addProductToCart(cid, pid) {
        const carts = await this._readFile(); // Carga todos los carritos
        const cart = carts.find(c => c.id === cid); // Busca el carrito por ID
        if (!cart) return null; // Si no existe, devuelve null

        // Busca si el producto ya está en el carrito
        const productIndex = cart.products.findIndex(p => p.product === pid);

        if (productIndex !== -1) {
            // Si ya existe el producto, incrementa la cantidad
            cart.products[productIndex].quantity++;
        } else {
            // Si no existe, lo agrega con quantity 1
            cart.products.push({ product: pid, quantity: 1 });
        }

        await this._writeFile(carts); // Guarda los cambios en el archivo
        return cart; // Devuelve el carrito actualizado
    }
}

