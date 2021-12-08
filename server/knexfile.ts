import path from 'path';

/* não usamos export default pois o knex não aceita essa sintaxe */
module.exports = {
    client: 'sqlite3',
    connection: { 
        // filename: "./src/database/database.sqlite",
         filename: path.resolve(__dirname, 'src', 'database','database.sqlite'),
    },
    migrations: {
        // filename: "./src/database/migrations",
        filename: path.resolve(__dirname, 'src', 'database','migrations'),
    }, 
    useNullAsDefault: true
};