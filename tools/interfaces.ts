export interface ICourse {
  id: number;
  name: string;
  type_id: number;
  thumbnail: string;
  minAge: number | null;
  maxAge: number | null;
  numberOfLessons: number | null;
  durationInMinutes: number | null;
  price: number | null;
  description: string | null;
  teacher_id: number | string | null;
  createdAt: string;
  updatedAt: string;
}

export interface IDescrption {
  id: number;
  aboutCourse: string | null;
  fullDescription: string | null;
  // problems: string | null;
  // results: string | null;
  schedule: string | null;
  groupSize: number | null;
  course_id: number;
  createdAt: string;
  updatedAt: string;
}

export interface IResults {
  id: number;
  text: string;
  courseDescription_id: number;
  createdAt: string;
  updatedAt: string;
}

export interface IProblems {
  id: number;
  text: string;
  courseDescription_id: number;
  createdAt: string;
  updatedAt: string;
}

export interface IProgram {
  course: ICourse;
  description: IDescrption;
  results: IResults[];
  problems: IProblems[];
}
