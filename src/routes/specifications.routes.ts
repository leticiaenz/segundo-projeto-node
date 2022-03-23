import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/implementation/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository;

specificationsRoutes.post("/", (request, response) => {
    const {name,  description } = request.body;
    const createSpecificationService = new CreateSpecificationService(specificationsRepository);
   
    createSpecificationService.execute({ name, description});

    return response.status(201);
});


export { specificationsRoutes };