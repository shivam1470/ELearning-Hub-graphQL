import courses from "./mock-db/courses";
import lessons from "./mock-db/lessons";
import { ICreateCourseInput, IAddLessonInput } from "./types";

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
  },

   createCourse: ({ input }: { input: ICreateCourseInput }) => {
    const newCourse = {
      id: String(courses.length + 1),
      ...input,
      published: false,
      lessons: [],
      lessonCount: 0
    };

    courses.push(newCourse);

    return newCourse;
  },

  addLesson: ({ input } : { input: IAddLessonInput }) => {
    const course = courses.find((c) => c.id === input.courseId);

    if (!course) {
      throw new Error("Course not found");
    }

    const newLesson = {
      id: String(lessons.length + 1),
      ...input,
      completed: false
    };

    lessons.push(newLesson);

    course.lessons.push(newLesson);
    course.lessonCount = course.lessons.length;

    return newLesson;
  },

  markLessonCompleted: ({ id }: {id : string}) => {
    const lesson = lessons.find((l) => l.id === id);

    if (!lesson) {
      throw new Error("Lesson not found");
    }

    lesson.completed = true;

    return lesson;
  },

  publishCourse: ({ id, published } : { id: string, published: boolean}) => {
    const course = courses.find((c) => c.id === id);

    if (!course) {
      throw new Error("Course not found");
    }

    course.published = published;

    return course;
  }
};