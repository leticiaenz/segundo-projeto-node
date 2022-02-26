import { ICategoriesRepository  } from "../repositories/ICategoriesRepository";\

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute({ description, name }: IRequest): void {
        const categoryAlreadyExistis = this.categoriesRepository.findByName(name);
        
        if(categoryAlreadyExistis){
            throw new Error("Category already exists");
        }
        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService };