
import React, { useState } from 'react';
import { Course, Lecturer, Allocation } from '../types';
import { generateAllocationReport } from '../services/geminiService';
import { ReportIcon } from './icons/Icons';

interface ReportGeneratorProps {
  data: {
    courses: Course[];
    lecturers: Lecturer[];
    allocations: Allocation[];
  };
}

const ReportGenerator: React.FC<ReportGeneratorProps> = ({ data }) => {
  const [prompt, setPrompt] = useState('');
  const [report, setReport] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateReport = async () => {
    if (!prompt.trim()) {
      setError('Please enter a query for the report.');
      return;
    }
    setError('');
    setIsLoading(true);
    setReport('');
    try {
      const result = await generateAllocationReport(prompt, data);
      setReport(result);
    } catch (err) {
      setError('Failed to generate report. Please check the console for details.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const examplePrompts = [
    "List all Assigned courses.",
    "Show the workload for each Lecturer, Including total courses and credits.",
    "Which Lecturer is assigned to Programming Using Java II?",
    "Provide a summary of course distribution for the ND II level."
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center mb-4">
        <ReportIcon className="h-6 w-6 text-blue-600 mr-3" />
        <h3 className="text-lg font-medium text-gray-900">AI Report Generation</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Ask a question about the current course allocations to generate an instant report.
      </p>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">
            Report Query
          </label>
          <textarea
            id="prompt"
            rows={3}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., List all unassigned courses..."
          />
        </div>
        <div className="text-xs text-gray-500">
            Example Queries:
            <ul className="list-disc list-inside mt-1">
                {examplePrompts.map(p => <li key={p} className="cursor-pointer hover:text-blue-600" onClick={() => setPrompt(p)}>{p}</li>)}
            </ul>
        </div>
        <button
          onClick={handleGenerateReport}
          disabled={isLoading}
          className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed transition"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            'Generate Report'
          )}
        </button>
        {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
      </div>

      {report && (
        <div className="mt-6 border-t pt-4">
          <h4 className="text-md font-medium text-gray-800">Generated Report:</h4>
          <div className="mt-2 p-4 bg-gray-50 rounded-md prose prose-sm max-w-none">
            <pre className="whitespace-pre-wrap font-sans text-sm text-gray-700">{report}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportGenerator;
