import express from 'express';
import { SERVER_PORT } from '../globals/enviroment';


export default class Server {

    public app: express.Application;
    public port: number;

    constructor(){
        this.app = express();
        this.port = SERVER_PORT;
        
    }

    start( callback : Function){
        this.app.listen(this.port, callback);
    }
    
    parseo(){
        this.app.use(express.json());
    }
}