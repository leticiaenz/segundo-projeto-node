import {Request, Response} from 'express'
import CreateCoursesService from './CreateCoursesService'

export function createCourse(request: Request, reponse:Response){

    CreateCoursesService.execute({ 
        name: "NodeJs",
        educator: "Dani",
        duration: 10
    });


    CreateCoursesService.execute({ 
        name: "ReactJs",
        educator: "Diego",
    });

    return reponse.send();
}