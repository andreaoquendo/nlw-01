import { Knex } from 'knex';
// mudança em relação ao TypeScript anterior

export async function up(knex: Knex){
    // CRIAR A TABELA
    knex.schema.createTable('points', table =>{
        
    })
}

export async function down() {
    // VOLTAR ATRÁS (DELETAR A TABELA)
}