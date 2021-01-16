export interface IStudent {
  id: number;
  name: string;
  email: string;
  studentCode: string;
  created_by: AtedBy;
  updated_by: AtedBy;
  created_at: Date;
  updated_at: Date;
  classrooms: Classroom[];
}

export interface Classroom {
  id: number;
  className: string;
  subjectCode: string;
  teacher: number;
  created_by: number;
  updated_by: number;
  created_at: Date;
  updated_at: Date;
}

export interface AtedBy {
  id: number;
  firstname: string;
  lastname: string;
  username: null;
}
