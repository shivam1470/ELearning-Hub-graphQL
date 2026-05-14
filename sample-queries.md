# GraphQL Manual Testing Reference

---

# 1. Basic Queries

## Hello Query

```graphql
query {
  hello
}
```

Expected:
- Returns greeting string

---

## Get All Courses

```graphql
query {
  courses {
    id
    title
    description
    level
    published
    lessonCount
  }
}
```

Expected:
- Returns all courses

---

## Get Single Course

```graphql
query {
  course(id: "1") {
    id
    title
    description
    level
    published
    lessonCount
  }
}
```

Expected:
- Returns course with id `1`

---

# 2. Nested Relation Queries

## Course With Lessons

```graphql
query {
  course(id: "1") {
    title
    lessons {
      id
      title
      durationMinutes
      completed
    }
  }
}
```

Expected:
- Nested lessons list returned

---

## All Courses With Nested Lessons

```graphql
query {
  courses {
    title
    lessons {
      title
      completed
    }
  }
}
```

Expected:
- Every course includes lesson list

---

# 3. Filter Queries

## Filter By Level

```graphql
query {
  courses(level: "BEGINNER") {
    title
    level
  }
}
```

Expected:
- Only beginner courses

---

## Filter By Published

```graphql
query {
  courses(published: true) {
    title
    published
  }
}
```

Expected:
- Only published courses

---

## Filter By Search

```graphql
query {
  courses(search: "graphql") {
    title
  }
}
```

Expected:
- Matching title results only

---

## Combined Filters

```graphql
query {
  courses(
    level: "BEGINNER"
    published: true
    search: "graphql"
  ) {
    title
  }
}
```

Expected:
- Only matching subset

---

# 4. Mutations

## Create Course

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

Expected:
- New course created
- published = false

---

## Add Lesson

```graphql
mutation {
  addLesson(
    input: {
      courseId: "1"
      title: "Resolvers"
      durationMinutes: 45
    }
  ) {
    id
    title
    completed
  }
}
```

Expected:
- Lesson added
- completed = false

---

## Mark Lesson Completed

```graphql
mutation {
  markLessonCompleted(id: "1") {
    id
    completed
  }
}
```

Expected:
- completed = true

---

## Publish Course

```graphql
mutation {
  publishCourse(
    id: "1"
    published: true
  ) {
    id
    published
  }
}
```

Expected:
- published = true

---

# 5. Validation Failure Tests

## Empty Course Title

```graphql
mutation {
  createCourse(
    input: {
      title: ""
      description: "Test"
      level: "BEGINNER"
    }
  ) {
    id
  }
}
```

Expected error:

```json
Course title cannot be empty
```

---

## Empty Lesson Title

```graphql
mutation {
  addLesson(
    input: {
      courseId: "1"
      title: ""
      durationMinutes: 30
    }
  ) {
    id
  }
}
```

Expected error:

```json
Lesson title cannot be empty
```

---

## Invalid Duration

```graphql
mutation {
  addLesson(
    input: {
      courseId: "1"
      title: "Bad lesson"
      durationMinutes: 0
    }
  ) {
    id
  }
}
```

Expected error:

```json
Lesson duration must be greater than 0
```

---

## Invalid Course

```graphql
mutation {
  addLesson(
    input: {
      courseId: "999"
      title: "Test"
      durationMinutes: 30
    }
  ) {
    id
  }
}
```

Expected error:

```json
Course not found
```

---

## Invalid Lesson

```graphql
mutation {
  markLessonCompleted(id: "999") {
    id
  }
}
```

Expected error:

```json
Lesson not found
```

---

# 6. Manual Test Checklist

## Queries

- [ ] hello works
- [ ] all courses query works
- [ ] single course lookup works
- [ ] nested lessons resolve
- [ ] filters work individually
- [ ] combined filters work

---

## Mutations

- [ ] createCourse works
- [ ] addLesson works
- [ ] markLessonCompleted works
- [ ] publishCourse works

---

## Validation

- [ ] empty course title rejected
- [ ] empty lesson title rejected
- [ ] duration <= 0 rejected
- [ ] invalid course rejected
- [ ] invalid lesson rejected

---

## Final Verification

- [ ] mock data updates correctly
- [ ] lessonCount updates correctly
- [ ] readable errors returned
- [ ] nested relations stay correct