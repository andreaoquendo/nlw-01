import express from 'express';

/* 
AULA 1
- Quando usamos typescript na app, ela não pode vir apenas com o código da biblioteca, mas também com a definição de tipos da biblioteca. Algumas bibliotecas vem com ambos, outras não.
- Ao paixar o npm install @types/express é usado o -D, pois essa biblioteca só será usada durante o desenvolvimento do projeto, mas não quando ele for ao ar. Ao lançá-lo online, este código será transformado em JavaScript.
- Não é possível rodar este código sozinho, uma vez que o node não entende TypeScript. Para isso baixamos a dependência de desenvolvimento ts-node. (npx ts-node src/server.ts)
- Foi instalado o TypeScript também.
- Toda vez que criamos uma aplicação typescript nós precisamos ter um arquivo de configuração do typescript que define quais features do typescript queremos (ou não) utilizar. (npx tsc --init)
- Para evitar o Ctrl+C e rodar de novo o pacote usamos o pacote ts-node-dev. Sempre que ele ver uma alteração irá executar de novo a aplicação.
- Agora para evitar ter que ficar escrevendo a rota inteira na hora de mandar um npx etc, escrevemos no package.json um script "dev = rota" e depois npm run dev :D
 */

/* Criando a aplicação */
const app = express();

/* 
- o método GET recebe dois atributos: request, por exemplo, com os dados do usuário, e response, que devolve algo par ao browser.
- para devolver, em vez de uma string, um JSON (JavaScript Object Notation). Geralmente enviamos no responde.json() um array ou um objeto.
*/
app.get('/users', (request, response)=>{
    console.log('Listagem de Usuários');
    
    response.json(['Andrea', 'Higidio', 'Patricia']);
});

app.listen(3333);