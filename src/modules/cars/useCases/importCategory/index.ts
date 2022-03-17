import { CategoriesRepository } from "../../repositories/implementation/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryContoller";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepository = CategoriesRepository.getIntance();
const importCategoryUseCase =  new ImportCategoryUseCase(categoriesRepository)
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController } ;