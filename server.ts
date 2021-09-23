import { executeQuery } from './src/db/client';
import http from 'http'
import app from "./app";
import { getXpub } from '@src/db/sqlMappingfunction/user.sql';
import { createPayment } from '@src/db/sqlMappingfunction/payment.sql';
import * as dotenv from 'dotenv';
dotenv.config();

class Server {
    public server: http.Server;
    public port: number;

    constructor() {
        this.server = http.createServer(app);
        this.port = process.env.PORT ? parseInt(process.env.PORT) : -1;
        this.listen();
    }

    public listen() {
        this.server.listen(this.port, () => {
            console.log(`Server running at port ${this.port}`);
        });
    }

    public close() {
        this.server.close();
    }
}

export default new Server();