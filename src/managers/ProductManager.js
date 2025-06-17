// Importa el módulo `fs` desde 'fs/promises' para trabajar con archivos de forma asincrónica
import fs from 'fs/promises';

// Importa el módulo `path` para resolver rutas del sistema de archivos
import path from 'path';

// Define la ruta absoluta al archivo donde se almacenarán los productos
const filePath = path.resolve('data/products.json');

// Exporta la clase ProductManager como módulo por defecto
export default class ProductManager {
    constructor() {
        // Guarda la ruta del archivo JSON en una propiedad interna
        this.path = filePath;
    }

    // Método privado para leer el archivo y devolver su contenido como array de objetos
    async _readFile() {
        try {
            const data = await fs.readFile(this.path, 'utf-8'); // Lee el archivo
            return JSON.parse(data); // Convierte el contenido JSON a array
        } catch {
            // Si el archivo no existe o hay un error, devuelve un array vacío
            return [];
        }
    }

    // Método privado para escribir el array de productos en el archivo
    async _writeFile(data) {
        await fs.writeFile(this.path, JSON.stringify(data, null, 2));
        // Guarda el contenido con formato bonito (indentado con 2 espacios)
    }

    // Método público para obtener todos los productos
    async getProducts() {
        return await this._readFile();
    }

    // Método público para obtener un producto por su ID
    async getProductById(id) {
        const products = await this._readFile();
        return products.find(p => p.id === id); // Devuelve el producto cuyo id coincida
    }

    // Método público para agregar un nuevo producto
    async addProduct(product) {
        const products = await this._readFile();
        const newId = Date.now().toString(); // Genera un ID único basado en la fecha actual
        const newProduct = { id: newId, ...product }; // Crea el nuevo producto
        products.push(newProduct); // Lo agrega al array
        await this._writeFile(products); // Guarda los cambios en el archivo
        return newProduct; // Devuelve el producto creado
    }

    // Método público para actualizar un producto existente por ID
    async updateProduct(id, update) {
        const products = await this._readFile();
        const index = products.findIndex(p => p.id === id); // Busca el índice del producto
        if (index === -1) return null; // Si no se encuentra, devuelve null

        const updated = { ...products[index], ...update }; // Mezcla los datos actuales con los nuevos
        updated.id = id; // Asegura que el ID no se sobrescriba
        products[index] = updated; // Reemplaza el producto en la lista

        await this._writeFile(products); // Guarda los cambios
        return updated; // Devuelve el producto actualizado
    }

    // Método público para eliminar un producto por ID
    async deleteProduct(id) {
        const products = await this._readFile();
        const updatedProducts = products.filter(p => p.id !== id); // Filtra y elimina el producto
        await this._writeFile(updatedProducts); // Guarda el nuevo array sin ese producto
        return; // No devuelve nada explícitamente
    }
}
