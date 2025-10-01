
import { Course, Lecturer, Allocation } from '../types';

export const mockLecturers: Lecturer[] = [
  { id: 'lec1', name: 'Ekemini Johnson', title: 'Dr.', specialization: ['Introduction to Programming', 'Programming Using Java II'] },
  { id: 'lec2', name: 'Mfon Essang', title: 'Mrs.', specialization: ['Computer Application Package II', 'Management Information System'] },
  { id: 'lec3', name: 'Akaninyene Udo', title: 'Mr.', specialization: ['Introduction to Computing', 'Basic Computer Network'] },
  { id: 'lec4', name: 'Tope Godwin', title: 'Mr.', specialization: ['Unified Modeling Language', 'Web Technology'] },
  { id: 'lec5', name: 'Habeeb Rahmon', title: 'Mr.', specialization: ['Introduction to Digital Electronics'] },
];

export const mockCourses: Course[] = [
  { id: 'cs101', code: 'COM 111', title: 'Introduction to Computing', credits: 3, semester: 1, level: 'ND I' },
  { id: 'cs102', code: 'COM 112', title: 'Introduction to Digital Electronics', credits: 3, semester: 1, level: 'ND I' },
  { id: 'cs103', code: 'COM 113', title: 'Introduction to Programming', credits: 4, semester: 1, level: 'ND I' },
  { id: 'cs211', code: 'COM 211', title: 'Programming Using Java II', credits: 4, semester: 3, level: 'ND II' },
  { id: 'cs213', code: 'COM 213', title: 'Unified Modeling Language', credits: 3, semester: 3, level: 'ND II' },
  { id: 'cs215', code: 'COM 215', title: 'Computer Application Package II', credits: 3, semester: 3, level: 'ND II' },
  { id: 'cs221', code: 'COM 221', title: 'Basic Computer Network', credits: 3, semester: 4, level: 'ND II' },
  { id: 'cs224', code: 'COM 224', title: 'Management Information System', credits: 2, semester: 4, level: 'ND II' },
  { id: 'cs225', code: 'COM 225', title: 'Web Technology', credits: 3, semester: 4, level: 'ND II' }
];

export const initialAllocations: Allocation[] = [
  { courseId: 'cs101', lecturerId: 'lec3' },
  { courseId: 'cs102', lecturerId: 'lec5' },
  { courseId: 'cs103', lecturerId: 'lec1' },
  { courseId: 'cs211', lecturerId: 'lec1' },
  { courseId: 'cs213', lecturerId: 'lec4' },
  { courseId: 'cs215', lecturerId: 'lec2' },
  { courseId: 'cs221', lecturerId: 'lec3' },
  { courseId: 'cs224', lecturerId: 'lec2' },
  { courseId: 'cs225', lecturerId: 'lec4' },
];
