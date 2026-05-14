import { ICourse, ILesson } from "../types";
import lessons from "./lessons";

const courses: ICourse[] = [
  {
    id: "1",
    title: "Intro to GraphQL",
    description: "Learn GraphQL basics including schema, queries, and mutations.",
    level: "BEGINNER",
    published: true,
    lessons: lessons.filter((lesson: ILesson) => lesson.courseId === "1"),
    lessonCount: lessons.filter((lesson: ILesson) => lesson.courseId === "1").length
  },
  {
    id: "2",
    title: "Node.js API Foundations",
    description: "Build a simple backend and understand API fundamentals.",
    level: "INTERMEDIATE",
    published: true,
    lessons: lessons.filter((lesson: ILesson) => lesson.courseId === "2"),
    lessonCount: lessons.filter((lesson: ILesson) => lesson.courseId === "2").length
  },
  {
    id: "3",
    title: "Advanced Resolver Patterns",
    description: "Practice nested resolvers, filtering, and GraphQL API design.",
    level: "ADVANCED",
    published: false,
    lessons: lessons.filter((lesson: ILesson) => lesson.courseId === "3"),
    lessonCount: lessons.filter((lesson: ILesson) => lesson.courseId === "3").length
  },
];

export default courses;