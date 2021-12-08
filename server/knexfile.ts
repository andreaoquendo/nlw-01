import path from 'path';

/* não usamos export default pois o knex não aceita essa sintaxe */
module.exports = {
    client: 'sqlite3',
    connection: { 
         filename: path.resolve(__dirname, 'src', 'database','database.sqlite'),
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database','migrations'),
    }, 
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true
};