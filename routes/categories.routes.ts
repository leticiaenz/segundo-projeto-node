import { request, Router } from "express";
import { CategoriesRepository } from "../src/modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../src/modules/cars/useCases/createCategory";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  
})

export { categoriesRoutes };