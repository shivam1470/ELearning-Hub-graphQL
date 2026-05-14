export type TCourseLevel =
  | "BEGINNER"
  | "INTERMEDIATE"
  | "ADVANCED";

export interface ICourse {
  id: string;
  title: string;
  description: string;
  level: TCourseLevel;
  published: boolean;
  lessons: ILesson[];
}

export interface ILesson {
  id: string;
  courseId: string;
  title: string;
  durationMinutes: number;
  completed: boolean;
}