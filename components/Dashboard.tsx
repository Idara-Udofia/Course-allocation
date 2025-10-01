
import React from 'react';
import { Course, Lecturer, Allocation } from '../types';
import AllocationTable from './AllocationTable';
import ReportGenerator from './ReportGenerator';

interface DashboardProps {
  courses: Course[];
  lecturers: Lecturer[];
  allocations: Allocation[];
  updateAllocation: (courseId: string, lecturerId: string | null) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ courses, lecturers, allocations, updateAllocation }) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Administrator Dashboard</h2>
        <p className="mt-2 text-lg text-gray-600">Manage course allocations and generate departmental reports.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            <AllocationTable
                courses={courses}
                lecturers={lecturers}
                allocations={allocations}
                updateAllocation={updateAllocation}
            />
        </div>
        <div>
            <ReportGenerator 
                data={{ courses, lecturers, allocations }}
            />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
