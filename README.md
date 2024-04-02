# laboratorio-node-api-rest

Una vez inicializada la API (`$ npm start `), se puede acceder a los siguientes endpoints

##Endpoint Listado de casa
El enponint de listado de casas es: (GET) <http://localhost:3000/api/houses?page=&pageSize=&country=>. 

##Endpoint del detalle de una casa
El enponint para obtener el detalle de una casas es: (GET) http://localhost:3000/api/houses/**id**

##Endpoint para ver el listado de Reviews de una casa
El enponint para obtener el listado de reviews de una casas es: (GET) http://localhost:3000/api/houses/**id**/reviews

##Endpoint para incertar una review
El enponint para incertar una review de una casas es: (POST) http://localhost:3000/api/houses/**id**/reviews

## TEST TDD
Usar `npm start test:watch`.
