import { Router } from "express";

import { Category } from "../src/model/Category";

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const category: Category = {
        name, 
        description,
        create_at: new Date(),
    }

    categories.push(category);

    return response.status(201).json({ category });

})

export {categoriesRoutes };