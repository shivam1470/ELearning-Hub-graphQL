import { buildSchema } from "graphql";

export default buildSchema(`
  type Lesson {
    id: ID!
    courseId: String!
    title: String!
    durationMinutes: Int!
    completed: Boolean!
  }

  type Course {
    id: ID!
    title: String!
    description: String!
    level: String!
    published: Boolean!
    lessons: [Lesson!]!
    lessonCount: Int!
  }

  input CreateCourseInput {
    title: String!
    description: String!
    level: String!
  }

  input AddLessonInput {
    courseId: ID!
    title: String!
    durationMinutes: Int!
  }

  type Query {
    hello: String
    course(id: ID!): Course
    courses(
      level: String
      published: Boolean
      search: String
    ): [Course!]!
    lesson(id: ID!): Lesson
    lessons: [Lesson]
  }

  type Mutation {
    createCourse(input: CreateCourseInput!): Course
    addLesson(input: AddLessonInput!): Lesson
    markLessonCompleted(id: ID!): Lesson
    publishCourse(id: ID!, published: Boolean!): Course
  }
`);