export interface IClassroom {
  id: number;
  className: string;
  subjectCode: string;
  teacher: Teacher;
  created_by: AtedBy;
  updated_by: AtedBy;
  created_at: Date;
  updated_at: Date;
  studyMaterials: StudyMaterial[];
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

export interface StudyMaterial {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: null;
  height: null;
  formats: null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  created_by: number;
  updated_by: number;
  created_at: Date;
  updated_at: Date;
}
