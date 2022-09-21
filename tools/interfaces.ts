export interface IProgram {
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