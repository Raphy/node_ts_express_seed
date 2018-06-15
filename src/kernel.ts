import * as express from 'express';
import { DefaultRoutes } from './routes/default.routes';

export class Kernel {
    public readonly app: express.Application = express();

    constructor() {
        this._registerRoutes();
    }

    private _registerRoutes(): void {
        DefaultRoutes.register(this);
    }
}

export default new Kernel();
