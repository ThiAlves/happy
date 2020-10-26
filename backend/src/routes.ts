import { Router } from 'express';
import '../src/controllers/OrphanagesController';
import OrphanagesController from './controllers/OrphanagesController';
import multer from 'multer';
import UploadConfig from './config/upload'

const routes = Router();
const upload = multer(UploadConfig);

routes.get('/orphanages', OrphanagesController.index); 
routes.get('/orphanages/:id', OrphanagesController.show); 
routes.post('/orphanages', upload.array('images'), OrphanagesController.create); 

export default routes;

// {
// 	"name": "Lar das Meninas2",
// 	"latitude": "-15.8112532",
// 	"longitude": "-47.9124338",
// 	"about": "Sobre o orfanato Lar das meninas",
// 	"instructions": "Venha visitar",
// 	"opening_hours": "Aberto de 10h as 12h",
// 	"open_on_weekends": true
// }