# Mini Learning Hub GraphQL API

A small learning project built to practice core GraphQL concepts using mock in-memory data.

This project demonstrates:

- GraphQL schema design
- Queries
- Mutations
- Input types
- Nested relationships
- Resolver logic
- Filtering
- Validation
- Error handling
- Manual API testing

---

# Project Goal

The goal of this project is to understand how GraphQL works by building a simple learning platform API.

The API manages:

- Courses
- Lessons
- Course publishing
- Lesson completion tracking

All data is stored in a mock in-memory database.

---

# Tech Stack

- **Node.js**
- **TypeScript**
- **Express**
- **GraphQL**
- **express-graphql**

---

# Project Structure

```txt
src/
 ├── mock-db/
 │   ├── courses.ts
 │   └── lessons.ts
 │
 ├── schema.ts
 ├── resolvers.ts
 ├── types.ts
 ├── sample-queries.md
 └── index.ts
```

---

# Features

## Queries

### Hello

Returns a greeting.

### Get All Courses

Supports filtering:

- level
- published
- search

### Get Course By ID

Fetch a single course.

### Get All Lessons

Fetch all lessons.

### Get Lesson By ID

Fetch one lesson.

### Nested Relations

Fetch lessons inside a course.

---

## Mutations

### Create Course

Creates a new course.

### Add Lesson

Adds lesson to a course.

### Mark Lesson Completed

Marks lesson as completed.

### Publish / Unpublish Course

Updates course publish state.

---

# Validation Rules

The API validates:

- Course title cannot be empty
- Lesson title cannot be empty
- Lesson duration must be greater than 0
- Course must exist before adding lesson
- Lesson must exist before marking complete

Readable errors are returned for manual testing.

---

# Install

```bash
npm install
```

---

# Run Project

```bash
npm run dev
```

Server runs at:

```txt
http://localhost:4000/graphql
```

Open in browser to access GraphQL Playground / Sandbox.

---

# Example Query

```graphql
query {
  courses {
    id
    title
    level
    published
  }
}
```

---

# Example Mutation

```graphql
mutation {
  createCourse(
    input: {
      title: "Advanced GraphQL"
      description: "Deep dive"
      level: "ADVANCED"
    }
  ) {
    id
    title
    published
  }
}
```

---

# Learning Concepts Practiced

This project demonstrates:

## Schema

Defines API contract and available types.

## Resolver

Implements business logic for schema fields.

## Query

Reads data.

## Mutation

Changes data.

## Input Types

Structured mutation inputs.

## Nested Fetching

Query related data in one request.

## Flexible Filtering

Client controls returned dataset.

## Validation

Protects data integrity.

---

# Manual Testing

See:

- `sample-queries.md`

These files contain:

- Query examples
- Mutation examples
- Validation test cases
- Learning recap

---

# Key Takeaway

This project shows why GraphQL is powerful:

The client requests exactly the data it needs in one flexible API endpoint.

It also shows where REST can feel simpler for small CRUD applications.

---

# Author

**Shivam Mishra**

Built for learning GraphQL fundamentals.