import express from 'express';
import cors from 'cors';
// npm install @types/cors -D
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

/* 
AULA 1
- Quando usamos typescript na app, ela não pode vir apenas com o código da biblioteca, mas também com a definição de tipos da biblioteca. Algumas bibliotecas vem com ambos, outras não.
- Ao paixar o npm install @types/express é usado o -D, pois essa biblioteca só será usada durante o desenvolvimento do projeto, mas não quando ele for ao ar. Ao lançá-lo online, este código será transformado em JavaScript.
- Não é possível rodar este código sozinho, uma vez que o node não entende TypeScript. Para isso baixamos a dependência de desenvolvimento ts-node. (npx ts-node src/server.ts)
- Foi instalado o TypeScript também.
- Toda vez que criamos uma aplicação typescript nós precisamos ter um arquivo de configuração do typescript que define quais features do typescript queremos (ou não) utilizar. (npx tsc --init)
- Para evitar o Ctrl+C e rodar de novo o pacote usamos o pacote ts-node-dev. Sempre que ele ver uma alteração irá executar de novo a aplicação.
- Agora para evitar ter que ficar escrevendo a rota inteira na hora de mandar um npx etc, escrevemos no package.json um script "dev = rota" e depois npm run dev :D
- Rota: Endereço completo da requisição
- Recurso: Qual entidade estamos acessando do sistema.
- o método GET recebe dois parâmetros: request, por exemplo, com os dados do usuário, e response, que devolve algo par ao browser.
- para devolver, em vez de uma string, um JSON (JavaScript Object Notation). Geralmente enviamos no responde.json() um array ou um objeto.
- Cada uma das rotas podem receber parâmetros.
- Request Param: Parâmetros que vem na própria rota que idenficiam um recurso.
- Query Param: separado por '?' e geralmente são parâmetros opcionais, por exemplo, para filtros, paginação, etc. Os parâmetros query não são necessáriamente únicos
- Request Body: Parâmetros para criação e atualização de informações.
*/

// Criando a aplicação
const app = express();

app.use(cors());
/* Por padrão o express não sabe que está lidando com uma API REST, e portanto não vem por padrão entendendo JSON. O app.use define uma nova funcionalidade no app. */
app.use(express.json());
app.use(routes);

/*  Precisamos ter uma rota para poder acessar essas imagens pelo navegador */
// nao entendi
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());
app.listen(3334);