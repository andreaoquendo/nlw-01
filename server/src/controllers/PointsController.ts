import { Request, Response } from 'express';
import knex from '../database/connection';

class PointsController{

    async index(request: Request, response: Response){
        // cideade, uf, items (Query Params)
        const { city, uf, items } = request.query;

        /* Item  trim é para tirar os espaços */
        const parsedItems = String(items)
            .split(',')
            .map(item => Number(item.trim()) )
        
        const points = await knex('points')
            .join('point_items', 'points.id', '=', 'point_items.point_id')
            .whereIn('point_items.item_id', parsedItems)
            .where('city', String(city))
            .where('uf', String(uf))
            .distinct()
            .select('points.*'); // pegar os dados da tabela points

        return response.json(points);
    };

    async show(request: Request, response: Response) {
        const { id } = request.params;

        // retorna um array, por isso usamos first
        const point = await knex('points').where('id', id).first();

        if(!point){
            return response.json(400).json({ message: 'Point no t found.'})
        }

        const items = await knex('items')
            .join('point_items', 'items.id', '=', 'point_items.item_id')
            .where('point_items.point_id', id)
            .select('items.title');

        return response.json({ point, items });
    };

    async create(request: Request, response: Response) {
        /* Desestruturação: se não tivesse o mesmo nome da propriedade deveria ser usado nome: name*/
        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        } = request.body;

        /*
            Havia um pequeno problema na função: há duas queries (insert), um após o outro e o segundo depende do primeiro. Se houver um problema na segunda query, a primeira continuaria executando, porque, inicialmente, elas não estão relacionadas. Então queremos que se uma não execute, a outra também não deverá executar. Para isso usamos uma transaction 'trx' chamado pela comunidade
        */

        const trx = await knex.transaction();

        const point = {
            image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFya2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        };


        // await???
        const insertedIds = await trx('points').insert(point);
        
        const point_id = insertedIds[0];

        const pointItems = items.map((item_id: number) => {
            return { 
                item_id,
                point_id,
            }
        });    

        await trx('point_items').insert(pointItems);

        /* Espera pra realmente fazer os inserts. */
        await trx.commit();

        /* Spread Operator: pegar todos os dados de um objeto e colocar em outro. */
        return response.json({ 
            id: point_id,
            ...point,
         });
    
    };
}

export default PointsController;