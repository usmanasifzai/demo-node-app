import express from 'express';
import appRouter from './routers/AppRouter.js';

class Server {
  app;

  constructor() {
    this.app = express();
    this.config();
    this.routerConfig();
  }

  config() {
    this.app.use(express.urlencoded({ extended:true }));
    this.app.use(express.json({ limit: '1mb' }));
    this.app.use(express.static('./public'));
  }

  routerConfig() {
    this.app.use(appRouter);
  }

  start(port) {
    return new Promise((resolve, reject) => {
      this.app.listen(port, () => {
        resolve(port);
      }).on('error', (err) => reject(err));
    });
  }
}

export default Server;
