
import { Course, Lecturer, Allocation } from '../types';

export const mockLecturers: Lecturer[] = [
  { id: 'lec1', name: 'Ekemini Johnson', title: 'Dr.', specialization: ['Web Development', 'Human-Computer Interaction'] },
  { id: 'lec2', name: 'Mfon Essang', title: 'Mrs.', specialization: ['Database Systems', 'Software Engineering'] },
  { id: 'lec3', name: 'Akaninyene Udo', title: 'Mr.', specialization: ['Networking', 'Cybersecurity'] },
  { id: 'lec4', name: 'Tope Godwin', title: 'Mr.', specialization: ['Algorithms', 'Data Structures', 'Theory of Computation'] },
  { id: 'lec5', name: 'Habeeb Rahmon', title: 'Ms.', specialization: ['Artificial Intelligence', 'Machine Learning'] },
];

export const mockCourses: Course[] = [
  { id: 'cs101', code: 'COM 111', title: 'Introduction to Computer Science', credits: 3, semester: 1, level: 'ND I' },
  { id: 'cs102', code: 'COM 112', title: 'Introduction to Programming', credits: 3, semester: 1, level: 'ND I' },
  { id: 'cs201', code: 'COM 211', title: 'Data Structures & Algorithms', credits: 4, semester: 3, level: 'ND II' },
  { id: 'cs202', code: 'COM 212', title: 'Database Management Systems', credits: 4, semester: 3, level: 'ND II' },
  { id: 'cs301', code: 'COM 311', title: 'Computer Networks', credits: 3, semester: 5, level: 'HND I' },
  { id: 'cs302', code: 'COM 312', title: 'Software Engineering', credits: 3, semester: 5, level: 'HND I' },
  { id: 'cs401', code: 'COM 411', title: 'Artificial Intelligence', credits: 4, semester: 7, level: 'HND II' },
  { id: 'cs402', code: 'COM 412', title: 'Web Development', credits: 3, semester: 7, level: 'HND II' },
  { id: 'cs403', code: 'COM 413', title: 'Project Management', credits: 2, semester: 7, level: 'HND II' }
];

export const initialAllocations: Allocation[] = [
  { courseId: 'cs101', lecturerId: 'lec5' },
  { courseId: 'cs102', lecturerId: 'lec4' },
  { courseId: 'cs201', lecturerId: 'lec4' },
  { courseId: 'cs202', lecturerId: 'lec2' },
  { courseId: 'cs301', lecturerId: 'lec3' },
  { courseId: 'cs302', lecturerId: 'lec2' },
  { courseId: 'cs401', lecturerId: 'lec1' },
  { courseId: 'cs402', lecturerId: 'lec5' },
];
