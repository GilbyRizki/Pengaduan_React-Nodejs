import { Sequelize } from "sequelize";

const db = new Sequelize('pengaduan_flutter', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;