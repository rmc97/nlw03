import { Router } from 'express';
import multer from 'multer';

import OrphanagesController from './controllers/OrphanagesController';
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;

/*
{
	"latitude": 15.6576367,
	"longitude": -44.1340288,
	"about": "louco e doido",
	"instructions": "só vem",
	"opening_hours": "19 as 23",
	"open_on_weekends": true
}
*/