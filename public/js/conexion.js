const { Pool } = require("pg") // de aqui puedo importar cosas del modulo pg de postgres elegimos pool para que sea un
// grupo de conexiones  
// Coloca aquí tus credenciales
const pool = new Pool({//aqui ponemos las credenciales de nuestra pg 
  user: "postgres",
  host: "127.0.0.1",
  database: "prueba",
  password: "ABEATIFULLIE1129",
  port: 5432,
});



