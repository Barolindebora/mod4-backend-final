Enlace al proyecto desplegado: https://mod4-backend-final.onrender.com 


Modelo 1 (rol de visitante)

Como visitante quiero registrarme en la plataforma para poder cargar mis atletas y disciplinas.

Modelo 2 (rol de entrenador/admin)

Como entrenador quiero editar los datos de mis atletas para mantener la información actualizada.

Modelo 3 (rol de atleta)

Como atleta quiero consultar en qué disciplina estoy registrado para saber si mis datos fueron cargados correctamente.


 Probar con Postman - JWT (jsonwebtoken)

Registro

POST http://localhost:5000/api/auth/register

Body (JSON):

{
  "nombre": "Juan Perez",
  "email": "juan@test.com",
  "password": "123456",
  "rol": "atleta"
}


Login

POST http://localhost:5000/api/auth/login

Body:

{
  "email": "juan@test.com",
  "password": "123456"
}


Respuesta:

{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "_id": "...",
    "nombre": "Juan Perez",
    "email": "juan@test.com",
    "rol": "atleta"
  }
}


Usar token en rutas protegidas

En Headers de Postman:

Authorization: Bearer TU_TOKEN


https://mod4-backend-final.onrender.com 

endpoints: 

ATLETAS: 

obtener todos: 

https://mod4-backend-final.onrender.com/api/athletes


Obtener atleta por ID:


https://mod4-backend-final.onrender.com/api/athletes/:id

// Buscar atletas por disciplina
router.get("/disciplina/:disciplina", buscarPorDisciplina);

// Crear nuevo atleta
router.post("/", crearAtleta);

// Actualizar atleta por ID
router.put("/:id", actualizarAtleta);

// Eliminar atleta por ID
router.delete("/:id", eliminarAtleta);