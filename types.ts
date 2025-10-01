
export enum UserRole {
  Admin = 'ADMIN',
  Lecturer = 'LECTURER',
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
}

export interface Course {
  id: string;
  code: string;
  title: string;
  credits: number;
  semester: number;
  level: string; // e.g., ND I, HND II
}

export interface Lecturer {
  id: string;
  name: string;
  title: string; // e.g., Dr., Mr.
  specialization: string[];
}

export interface Resource {
  id: string;
  name: string;
  type: 'Classroom' | 'Lab' | 'Projector';
  capacity?: number;
}

export interface Allocation {
  courseId: string;
  lecturerId: string | null;
}

export interface ScheduleEntry {
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
  time: string; // e.g., '09:00 - 11:00'
  course: Course;
  lecturer: Lecturer;
  resourceId: string;
}
