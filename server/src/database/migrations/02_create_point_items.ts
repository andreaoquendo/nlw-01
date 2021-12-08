import Knex from 'knex';
// mudança em relação ao TypeScript anterior

export async function up(knex: Knex){
    // CRIAR A TABELA
    return knex.schema.createTable('point_items', table =>{
        table.increments('id').primary(),
        table.string('point_id')
            .notNullable()
            .references('id')
            .inTable('points'),
        table.string('item_id').notNullable()
    });
}

export async function down(knex: Knex) {
    // VOLTAR ATRÁS (DELETAR A TABELA)
    return knex.schema.dropTable('point_items');
}