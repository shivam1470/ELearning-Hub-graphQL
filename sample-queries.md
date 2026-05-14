# GraphQL Sample Queries & Mutations

## 1. Hello Query

```graphql
query {
  hello
}
```

---

## 2. Get All Courses

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

---

## 3. Get Course By ID

```graphql
query {
  course(id: "1") {
    id
    title
    description
    level
    published
    lessonCount
    lessons {
      id
      title
      durationMinutes
      completed
    }
  }
}
```

---

## 4. Get All Lessons

```graphql
query {
  lessons {
    id
    courseId
    title
    durationMinutes
    completed
  }
}
```

---

## 5. Get Lesson By ID

```graphql
query {
  lesson(id: "1") {
    id
    courseId
    title
    durationMinutes
    completed
  }
}
```

---

# Mutations

## 6. Create Course

```graphql
mutation {
  createCourse(
    input: {
      title: "Advanced GraphQL"
      description: "Deep dive into GraphQL"
      level: "ADVANCED"
    }
  ) {
    id
    title
    description
    level
    published
    lessonCount
  }
}
```

---

## 7. Add Lesson

```graphql
mutation {
  addLesson(
    input: {
      courseId: "1"
      title: "GraphQL Resolvers"
      durationMinutes: 45
    }
  ) {
    id
    title
    durationMinutes
    completed
  }
}
```

---

## 8. Mark Lesson Completed

```graphql
mutation {
  markLessonCompleted(id: "1") {
    id
    title
    completed
  }
}
```

---

## 9. Publish Course

```graphql
mutation {
  publishCourse(id: "1", published: true) {
    id
    title
    published
  }
}
```

---

## 10. Unpublish Course

```graphql
mutation {
  publishCourse(id: "1", published: false) {
    id
    title
    published
  }
}
```

---

## 11. Search & Filter query

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

---

# Practice Flow

Run in this order:

1. Create course
2. Query all courses
3. Add lesson
4. Query course by id
5. Mark lesson completed
6. Publish course
7. Query final course state