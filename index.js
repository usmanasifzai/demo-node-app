import Server from './server.js';

const port = process.env.PORT || '5000';

const starter = new Server().start(port)
  .then(port => console.info(`Running on port ${port}`))
  .catch(error => {
    console.log(error)
  });

export default starter;
