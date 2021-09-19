import express from 'express'
import cors from 'cors'

import swaggerUi  from 'swagger-ui-express';
import {specs} from '@src/modules/swagger'
import router from '@src/routes/router';


const app: express.Application = express();
app.use(cors());
app.use(express.json());
app.use('/api',router);

export default app;