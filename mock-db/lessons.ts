import { ILesson } from "../types";

const lessons: ILesson[] = [
  {
    id: "101",
    courseId: "1",
    title: "What is GraphQL?",
    durationMinutes: 15,
    completed: true,
  },
  {
    id: "102",
    courseId: "1",
    title: "Understanding GraphQL schema",
    durationMinutes: 20,
    completed: false,
  },
  {
    id: "103",
    courseId: "1",
    title: "Queries and mutations",
    durationMinutes: 18,
    completed: false,
  },
  {
    id: "201",
    courseId: "2",
    title: "Setting up a Node.js server",
    durationMinutes: 25,
    completed: true,
  },
  {
    id: "202",
    courseId: "2",
    title: "Building a simple API",
    durationMinutes: 30,
    completed: false,
  },
  {
    id: "301",
    courseId: "3",
    title: "Nested resolvers in GraphQL",
    durationMinutes: 22,
    completed: false,
  },
  {
    id: "302",
    courseId: "3",
    title: "Filtering and arguments",
    durationMinutes: 19,
    completed: false,
  },
];

export default lessons