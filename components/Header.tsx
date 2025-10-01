
import React from 'react';
import { User } from '../types';
import { AcademicCapIcon, UserIcon, LogoutIcon } from './icons/Icons';

interface HeaderProps {
  user: User | null;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <AcademicCapIcon className="h-8 w-8 text-blue-600" />
            <h1 className="ml-3 text-2xl font-bold text-gray-800 tracking-tight">
              Course Allocation System
            </h1>
            <span className="ml-4 text-sm font-medium text-gray-500">
              CS Dept. - Federal Polytechnic, Ukana
            </span>
          </div>
          {user && (
            <div className="flex items-center">
              <div className="flex items-center text-sm text-gray-600">
                <UserIcon className="h-5 w-5 mr-2 text-gray-500" />
                <span>
                  Welcome, <strong>{user.name}</strong> ({user.role})
                </span>
              </div>
              <button
                onClick={onLogout}
                className="ml-4 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition"
              >
                <LogoutIcon className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
