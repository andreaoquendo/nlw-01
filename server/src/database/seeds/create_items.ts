import Knex from 'knex';

// Quando eu deveria usar funções assíncronas?
export async function seed(knex: Knex){
    await knex('items').insert([
        { title: 'Lâmpadas', image: 'lampadas.svg'},
        { title: 'Pilhas e Baterias', image: 'baterias.svg'},
        { title: 'Papéis e Papelão', image: 'papeis-papelao.svg'},
        { title: 'Resíduos Eletrônicos', image: 'lampadas.svg'},
        { title: 'Resíduos Orgânicos', image: 'eletronicos.svg'},
        { title: 'Óleo de Cozinha', image: 'oleo.svg'}
    ]);
}