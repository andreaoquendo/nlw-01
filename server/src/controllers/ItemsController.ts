import { Request, Response } from 'express';
import knex from '../database/connection'

class ItemsController {
    async index (request: Request, response: Response){
        const items = await knex('items').select('*');
    
        /* Ele retorna um mapa com os itens requisitados. */
        const serializedItems = items.map(item => {
            return {
                title: item.title,
                image_url: `http://localhost:3334/uploads/${item.image}`
            }
        });
    
        return response.json(serializedItems);
    }
}

export default ItemsController;