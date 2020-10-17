import { Router } from "express";

import OrphanagesController from './controllers/OrphanagesController'

const routes = Router();

routes.post("/orphanages", OrphanagesController.create);
routes.get("/orphanages/:id", OrphanagesController.show);
routes.post("/orphanages", OrphanagesController.create);

export default routes;
