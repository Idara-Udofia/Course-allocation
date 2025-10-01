
import React, { useState } from 'react';
import { User, UserRole, Lecturer } from '../types';
import { AcademicCapIcon, ChevronDownIcon } from './icons/Icons';

interface LoginProps {
  onLogin: (user: User) => void;
  lecturers: Lecturer[];
}

const Login: React.FC<LoginProps> = ({ onLogin, lecturers }) => {
  const [selectedRole, setSelectedRole] = useState<UserRole>(UserRole.Admin);
  const [selectedLecturerId, setSelectedLecturerId] = useState<string>(lecturers[0]?.id || '');

  const handleLogin = () => {
    if (selectedRole === UserRole.Admin) {
      onLogin({ id: 'admin01', name: 'HOD', role: UserRole.Admin });
    } else {
      const lecturer = lecturers.find(l => l.id === selectedLecturerId);
      if (lecturer) {
        onLogin({ ...lecturer, role: UserRole.Lecturer });
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-120px)]">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <div className="flex flex-col items-center">
            <div className="p-3 bg-blue-100 rounded-full">
                <AcademicCapIcon className="h-10 w-10 text-blue-600" />
            </div>
          <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900">
            System Login
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Select your role to continue
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
                <label htmlFor="role" className="sr-only">Role</label>
                <div className="relative">
                    <select
                        id="role"
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value as UserRole)}
                        className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    >
                        <option value={UserRole.Admin}>Administrator</option>
                        <option value={UserRole.Lecturer}>Lecturer</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <ChevronDownIcon className="h-4 w-4" />
                    </div>
                </div>
            </div>
            {selectedRole === UserRole.Lecturer && (
              <div className="pt-4">
                <label htmlFor="lecturer" className="sr-only">Lecturer</label>
                <div className="relative">
                    <select
                        id="lecturer"
                        value={selectedLecturerId}
                        onChange={(e) => setSelectedLecturerId(e.target.value)}
                        className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    >
                    {lecturers.map(lecturer => (
                        <option key={lecturer.id} value={lecturer.id}>{lecturer.title} {lecturer.name}</option>
                    ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <ChevronDownIcon className="h-4 w-4" />
                    </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={handleLogin}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
