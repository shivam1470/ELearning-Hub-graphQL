const { buildSchema } = require("graphql");

module.exports = buildSchema(`
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
  }

  type Query {
    hello: String
    course(id: ID!): Course
    courses: [Course]
    lesson(id: ID!): Lesson
    lessons: [Lesson]
  }
`);