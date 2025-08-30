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
