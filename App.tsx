
import React, { useState, useCallback } from 'react';
import { User, UserRole, Course, Lecturer, Allocation } from './types';
import { mockCourses, mockLecturers, initialAllocations } from './data/mockData';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import LecturerView from './components/LecturerView';
import Header from './components/Header';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [courses, setCourses] = useState<Course[]>(mockCourses);
  const [lecturers, setLecturers] = useState<Lecturer[]>(mockLecturers);
  const [allocations, setAllocations] = useState<Allocation[]>(initialAllocations);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  const updateAllocation = useCallback((courseId: string, lecturerId: string | null) => {
    setAllocations(prevAllocations => {
      const existingAllocation = prevAllocations.find(a => a.courseId === courseId);
      if (existingAllocation) {
        return prevAllocations.map(a => 
          a.courseId === courseId ? { ...a, lecturerId } : a
        );
      } else if (lecturerId) {
        return [...prevAllocations, { courseId, lecturerId }];
      }
      return prevAllocations;
    });
  }, []);

  const getLecturerForCourse = (courseId: string) => {
    const allocation = allocations.find(a => a.courseId === courseId);
    return allocation ? lecturers.find(l => l.id === allocation.lecturerId) : undefined;
  };
  
  const getCoursesForLecturer = (lecturerId: string) => {
    return allocations
      .filter(a => a.lecturerId === lecturerId)
      .map(a => courses.find(c => c.id === a.courseId))
      .filter((c): c is Course => c !== undefined);
  };

  const renderContent = () => {
    if (!currentUser) {
      return <Login onLogin={handleLogin} lecturers={lecturers} />;
    }
    
    switch (currentUser.role) {
      case UserRole.Admin:
        return (
          <Dashboard
            courses={courses}
            lecturers={lecturers}
            allocations={allocations}
            updateAllocation={updateAllocation}
          />
        );
      case UserRole.Lecturer:
        const lecturer = lecturers.find(l => l.id === currentUser.id);
        if (!lecturer) return <div>Error: Lecturer not found.</div>;
        const assignedCourses = getCoursesForLecturer(lecturer.id);
        return <LecturerView lecturer={lecturer} courses={assignedCourses} />;
      default:
        return <Login onLogin={handleLogin} lecturers={lecturers} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header user={currentUser} onLogout={handleLogout} />
      <main className="p-4 sm:p-6 lg:p-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
