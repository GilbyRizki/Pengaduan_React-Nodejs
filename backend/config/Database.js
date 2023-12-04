import { Sequelize } from "sequelize";

const db = new Sequelize('pengaduan_nodejs', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;