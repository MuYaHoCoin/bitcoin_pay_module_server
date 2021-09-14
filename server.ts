import http from 'http'
import app from "./app";

class Server {
    public server: http.Server;
    public port: number;

    constructor() {
        this.server = http.createServer(app);
        this.port = 3000;
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