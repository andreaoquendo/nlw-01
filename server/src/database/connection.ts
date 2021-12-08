import knex from "knex";
import path from 'path';

// Fazer as queries no banco de dados usando TypeScript. Configurações do Banco de Dados
/*
Dentro do connection, vai estar o filename, ou seja, qual vai ser o arquivo onde vamos armazenar a database. Ao lidar com caminhos dentro do node é bom usar a library 'path'.

O path.resolve() une caminhos. Resolve as inconsistências entre diferentes Sistemas Operacionais. 
__dirname - retorna o diretório no qual o arquivo está
*/
const connection = knex({
    client: 'sqlite3',
    connection: { 
        // filename: "./src/database/database.sqlite",
        filename: path.resolve(__dirname, 'database.sqlite'),
    }, 
    useNullAsDefault: true
});

export default connection;