import express from 'express';
import routes from './routes';
import cors from 'cors';

import './database';

class App {
    constructor() {
        // instanciando app/express
        this.server = express();
        
        this.server.use(cors());

        this.middlewares();
        this.routes();
    }

    middlewares() {
        // para leitura de json
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;