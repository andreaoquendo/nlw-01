import { Request, Response } from 'express';
import knex from '../database/connection'

class ItemsController {
    async index (request: Request, response: Response){
        const items = await knex('items').select('*');
    
        /* Ele retorna um mapa com os itens requisitados. */
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://192.168.0.124:3334/uploads/${item.image}`
            }
        });
    
        return response.json(serializedItems);
    }
}

export default ItemsController;