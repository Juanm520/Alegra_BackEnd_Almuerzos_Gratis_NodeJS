/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'Menus';
const collection = 'menus';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);

//Documents
const documents = [
    {"code": 1, "name": 'Arroz con Pollo y Ensalada', "cookingTime": 15, "ingredients": {
        "rice": 1,
        "chicken": 1,
        "lemon": 1,
        "lettuce": 1,
        "tomato": 2,
        "onion": 1,
    }},
    {"code": 2, "name": 'Hamburguesa con Papas Fritas y Ensalada', "cookingTime": 10, "ingredients": {
        "meat": 1,
        "potato": 2,
        "tomato": 1,
        "lettuce": 1,
        "onion": 2,
        "cheese": 1,
        "ketchup": 1,
    }},
    {"code": 3, "name": 'Arroz con Carne y Ensalada', "cookingTime": 10, "ingredients": {
        "rice": 1,
        "potato": 2,
        "meat": 1,
        "lettuce": 1,
        "onion": 1,
        "lemon": 1,
    }},
    {"code": 4, "name": 'Papa Rellena con Carne y Ensalada', "cookingTime": 15, "ingredients": {
        "potato": 2,
        "meat": 1,
        "tomato": 1,
        "onion": 1,
        "lemon": 1,
    }},
    {"code": 5, "name": 'Pollo a la Parrilla con Arroz y Ensalada', "cookingTime": 20, "ingredients": {
        "chicken": 1,
        "rice": 1,
        "lettuce": 1,
        "tomato": 2,
        "lemon": 1,
    }},
    {"code": 6, "name": 'Pollo a la cazadora con Arroz', "cookingTime": 15, "ingredients": {
        "chicken": 1,
        "rice": 1,
        "lettuce": 1,
        "tomato": 2,
        "onion": 1,
        "cheese": 1,
        "ketchup": 1,
    }},

]

//Create the documents
db.menus.insertMany(documents)