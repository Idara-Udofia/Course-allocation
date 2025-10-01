
import React from 'react';
import { Course, Lecturer, Allocation } from '../types';
import { ChevronDownIcon } from './icons/Icons';

interface AllocationTableProps {
  courses: Course[];
  lecturers: Lecturer[];
  allocations: Allocation[];
  updateAllocation: (courseId: string, lecturerId: string | null) => void;
}

const AllocationTable: React.FC<AllocationTableProps> = ({ courses, lecturers, allocations, updateAllocation }) => {

  const handleLecturerChange = (courseId: string, e: React.ChangeEvent<HTMLSelectElement>) => {
    const lecturerId = e.target.value === 'unassigned' ? null : e.target.value;
    updateAllocation(courseId, lecturerId);
  };
  
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Course Allocation Management</h3>
          <p className="mt-1 text-sm text-gray-500">Assign lecturers to available courses for the current session.</p>
        </div>
        <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
            <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned Lecturer</th>
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            {courses.map((course) => {
                const allocation = allocations.find(a => a.courseId === course.id);
                const assignedLecturerId = allocation ? allocation.lecturerId : 'unassigned';
                
                return (
                <tr key={course.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{course.title}</div>
                        <div className="text-sm text-gray-500">{course.code} - {course.credits} Credits</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.level} (Sem {course.semester})</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="relative">
                            <select
                            value={assignedLecturerId || 'unassigned'}
                            onChange={(e) => handleLecturerChange(course.id, e)}
                            className="w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md appearance-none"
                            >
                                <option value="unassigned">-- Unassigned --</option>
                                {lecturers.map((lecturer) => (
                                    <option key={lecturer.id} value={lecturer.id}>
                                    {lecturer.title} {lecturer.name}
                                    </option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <ChevronDownIcon className="h-4 w-4" />
                            </div>
                        </div>
                    </td>
                </tr>
                );
            })}
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllocationTable;
