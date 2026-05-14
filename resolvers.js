const courses = require("./mock-db/courses");
const lessons = require("./mock-db/lessons");

module.exports = {
  hello: () => {
    return "Hello Shivam Mishra!";
  },

  course: ({id}) => {
    return courses.find(course => course.id == id);
  },

  courses: () => { 
   return courses;
  },

  lesson: ({id}) => {
    return lessons.find(lesson => lesson.id == id);
  },

  lessons: () => {
    return lessons;
  }
};