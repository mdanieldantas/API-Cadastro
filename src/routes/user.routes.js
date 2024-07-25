// Importando a função 'create' do controller de usuários
// Importando a função 'get' do controller de usuários
// Importando a função 'getId' do controller de usuários
import { create, get, getId } from "../controllers/user.controller";

// Definindo as rotas relacionadas aos usuários
export const userRoutes = (app) => {
  // Quando alguém fizer um pedido POST para "/users", execute a função 'create'
  app.post("/user", create);
  // Quando alguém fizer um pedido GET para "/users", execute a função 'get'
  app.get("/user", get);
  // Quando alguém fizer um pedido GET para "/user/:id", execute a função 'getId'
  app.get("/user/:id", getId);
};


// Exportando as rotas de usuários
export default userRoutes;
