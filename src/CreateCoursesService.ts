
interface Course {
    name: String;
    duration: number; 
    educator: string;
}

class CreateCourseService {

    execute({ name, educator, duration}: Course){
        console.log(name, educator, educator);
    }
}

export default new CreateCourseService();