import courses from "./mock-db/courses";
import lessons from "./mock-db/lessons";

export default {
  hello: () => {
    return "Hello Shivam Mishra!";
  },

  course: ({id}: {id: string}) => {
    return courses.find(course => course.id == id);
  },

  courses: () => { 
   return courses;
  },

  lesson: ({id}: {id: string}) => {
    return lessons.find(lesson => lesson.id == id);
  },

  lessons: () => {
    return lessons;
  }
};