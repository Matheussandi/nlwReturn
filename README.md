# <p align="center">Feedget</p>

<p align="justify">Feedget é um Widget que fica na parte inferior da tela com intuito de mandar Feedbacks, com opções de enviar um problema, ideia ou apenas um comentário. Podendo também enviar uma imagem junto clicando na imagem da câmera que tira um print instantâneo da janela.</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/29473781/169668668-902ed4e9-b92b-4e8c-bcd6-dff2e3625157.png" />
  <br>
  Projeto desenvolvido durante a 8º edição do evento NLW feito pela <a href="https://www.rocketseat.com.br/">Rocketseat</a>
</p>

# 🛠️ Recursos

- [x] Widget de feedback funcional;
 
- [x] Cadastro dos feedbacks enviados no banco;
 
- [x] Envio dos feedbacks para o email do host com Mailtrap;

- [x] Botão de Screenshot;
 
# 👨‍💻 Tecnologias

- [React](https://pt-br.reactjs.org/)

- [Typescript](https://www.typescriptlang.org/)

- [Tailwind CSS](https://tailwindcss.com/)

- [Headless UI](https://headlessui.dev/)

- [Vite](https://vitejs.dev/)

- [Node.js](https://nodejs.org/en/)

- [Express](https://expressjs.com/pt-br/)

- [Jest](https://jestjs.io/pt-BR/)

- [Prisma](https://www.prisma.io/)

- [Axios](https://axios-http.com/docs/intro)

- [NodeMailer](https://nodemailer.com/about/)

- [React Native](https://reactnative.dev/)
 
- [Expo](https://expo.dev/)
 
 # ⚠️ Antes de iniciar o projeto ⚠️
 
### 🔒 Pasta server
Crie o arquivo .env e coloque como valor na variável DATABASE_URL a URL do banco de dados posgreSQL que está rodando e execute as migrations do prisma utilizando `npx prisma migrate dev`.

### 🌐 Pasta web
Crie um arquivo `.env.local`, adicione uma variável `VITE_API_URL` passando a URL do back-end.


# ▶️ Executando o projeto
```
# Instala as dependências
npm install

# Excecuta aplicação web e server
npm run dev

# Excecuta aplicação mobile
expo start
```
 
# 📄 Licença

Esse projeto está sob a licença MIT.
