const { buildSchema } = require("graphql");

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

  type Query {
    hello: String
    course(id: ID!): Course
    courses: [Course]
    lesson(id: ID!): Lesson
    lessons: [Lesson]
  }
`);