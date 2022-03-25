import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

//import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";


const specificationsRoutes = Router();


specificationsRoutes.post("/", (request, response) => {


    return  createSpecificationController.handle(request, response);
});


export { specificationsRoutes };