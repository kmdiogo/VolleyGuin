import "reflect-metadata";
require('dotenv').config();
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from 'cors'
import routes from './routes'

const HOST = process.env.NODE_ENV === 'development' ? 'localhost' : '192.168.1.7';
const PORT = 3000;
createConnection().then(async connection => {

    // create express app
    const app = express();

    // middleware
    app.use(cors());
    app.use(express.static('public'));
    app.use(bodyParser.json());

    // route config
    app.use('/', routes);

    // start express server
    app.listen(PORT, HOST);

    console.log(`Server has started on http://${HOST}:${PORT}`);

}).catch(error => console.log(error));