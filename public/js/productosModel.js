
const conexion = require("../conexion")
module.exports = {
    async insertar(nombre, cedula) {
        let resultados = await conexion.query(`insert into productos
        (nombre, cedula)
        values
        ($1, $2)`, [nombre, cedula]);
        return resultados;
    },
    async obtener() {
        const resultados = await conexion.query("select id, nombre, precio from productos");
        return resultados.rows;
    },
    async obtenerPorId(id) {
        const resultados = await conexion.query(`select id, nombre, precio from productos where id = $1`, [id]);
        return resultados.rows[0];
    },
    async actualizar(id, nombre, precio) {
        const resultados = conexion.query(`update productos
        set nombre = $1,
        precio = $2
        where id = $3`, [nombre, precio, id]);
        return resultados;
    },
    async eliminar(id) {
        const resultados = conexion.query(`delete from productos
        where id = $1`, [id]);
        return resultados;
    },
}