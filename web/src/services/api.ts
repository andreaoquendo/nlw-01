import axios from 'axios';

/* 
Não é usado o próprio fetch() - api nativa do JS para fazer requisições do Node - pois o axios permite criar uma base URL para repetir em todas as requisições.
*/
const api = axios.create({
    baseURL:'http://localhost:3334'
});

export default api;