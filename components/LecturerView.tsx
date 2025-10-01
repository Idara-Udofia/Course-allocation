
import React from 'react';
import { Course, Lecturer } from '../types';
import { AcademicCapIcon, UserIcon } from './icons/Icons';

interface LecturerViewProps {
  lecturer: Lecturer;
  courses: Course[];
}

const LecturerView: React.FC<LecturerViewProps> = ({ lecturer, courses }) => {
  const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);

  return (
    <div className="space-y-8">
        <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Lecturer Portal</h2>
            <p className="mt-2 text-lg text-gray-600">Welcome, {lecturer.title} {lecturer.name}. Here are your assigned courses.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
                <div className="flex-shrink-0 h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <UserIcon className="h-10 w-10 text-blue-600" />
                </div>
                <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">{lecturer.title} {lecturer.name}</h3>
                    <p className="text-sm text-gray-500">Specializations: {lecturer.specialization.join(', ')}</p>
                    <p className="text-sm text-gray-500">Total Credits Assigned: <span className="font-bold text-blue-600">{totalCredits}</span></p>
                </div>
            </div>
        </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Assigned Courses</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Code</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Title</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credits</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {courses.length > 0 ? courses.map((course) => (
                <tr key={course.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.code}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{course.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.level} (Sem {course.semester})</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.credits}</td>
                </tr>
              )) : (
                <tr>
                    <td colSpan={4} className="text-center py-10 text-gray-500">
                        <div className="flex flex-col items-center">
                            <AcademicCapIcon className="h-12 w-12 text-gray-300 mb-2"/>
                            <span>No courses assigned yet.</span>
                        </div>
                    </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LecturerView;
