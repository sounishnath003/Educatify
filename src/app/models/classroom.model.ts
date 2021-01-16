export interface IClassroom {
  id: number;
  className: string;
  subjectCode: string;
  teacher: Teacher;
  created_by: AtedBy;
  updated_by: AtedBy;
  created_at: Date;
  updated_at: Date;
  students: Teacher[];
}

export interface AtedBy {
  id: number;
  firstname: string;
  lastname: string;
  username: null;
}

export interface Teacher {
  id: number;
  name: string;
  email: string;
  studentCode?: string;
  created_by: number;
  updated_by: number;
  created_at: Date;
  updated_at: Date;
  facultyCode?: string;
}
