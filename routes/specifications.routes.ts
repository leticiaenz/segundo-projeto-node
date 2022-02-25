import { Router } from "express";
import { SpecificationsRepository } from "../src/modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../src/modules/cars/services/CreateSpecificationServvice";

const specificationsRoutes = Router();

const specificationRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
    const createSpecificationService = new CreateSpecificationService(specificationRepository);

    createSpecificationService.execute({ name, description });

    return response.status(201).send();
})

export { specificationsRoutes };