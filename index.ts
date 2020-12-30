import Server from './clases/server';
import { router } from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();

server.app.use(bodyParser.urlencoded({ extended: true }));
server.parseo();

server.app.use(cors({ origin: '*', credentials:true }));

server.app.use('/',router);

server.start(()=>{
    console.log(`Server corriendo en el puerto ${server.port}`);
});