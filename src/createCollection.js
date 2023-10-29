
/**
 * 
 * A continuaci[on encontrarás el script para la creación de la colección "productslist"
 * que contien la lista de productos y que será listada por la aplicación
 */


//Paso 1. Crear la colección
//usamos el siguiente comando

  db.createCollection('product_list', {})

//Con el comando anterior se crea la colección

//Luego vamos a insertar los documentos que será la lista de productos


db.product_list.insertMany ([
        {
            
            "id": 1,
            "product_name": "Product 1",
            "description": "product generated for the list of this activity",
            "price": 5350
        },
        {
            
            "id": 3,
            "product_name": "Product 3",
            "description": "product generated for the list of this activity",
            "price": 62540
        },
        {
            
            "id": 5,
            "product_name": "Product 5",
            "description": "product generated for the list of this activity",
            "price": 15420
        },
        {
            "id": 4,
            "product_name": "Product 4",
            "description": "product generated for the list of this activity",
            "price": 36520
        },
        {
            "id": 6,
            "product_name": "Product 6",
            "description": "product generated for the list of this activity",
            "price": 7850
        },
        {
            "id": 7,
            "product_name": "Product 7",
            "description": "product generated for the list of this activity",
            "price": 6400
        },
        {
            "id": 8,
            "product_name": "Product 8",
            "description": "product generated for the list of this activity",
            "price": 17600
        },
        {
            "id": 2,
            "product_name": "Product 2",
            "description": "product generated for the list of this activity",
            "price": 15480
        }
    ]
)