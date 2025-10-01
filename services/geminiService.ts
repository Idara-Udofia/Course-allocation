
import { GoogleGenAI } from "@google/genai";
import { Course, Lecturer, Allocation } from '../types';

if (!process.env.API_KEY) {
  // A simple alert for this example app. In a real app, you'd have a more robust config system.
  alert("API_KEY environment variable not set. Report generation will not work.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

interface ReportData {
  courses: Course[];
  lecturers: Lecturer[];
  allocations: Allocation[];
}

export const generateAllocationReport = async (prompt: string, data: ReportData): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Error: Gemini API key is not configured. Please set the API_KEY environment variable.";
  }

  try {
    const model = 'gemini-2.5-flash';
    
    const systemInstruction = `You are an AI assistant for the Head of Department of Computer Science at Federal Polytechnic, Ukana. 
    Your task is to analyze the provided JSON data about course allocations and generate a concise, professional report based on the user's request.
    The data includes lists of lecturers, courses, and the current allocations linking them.
    An allocation with a 'null' lecturerId means the course is unassigned.
    Provide clear, well-formatted answers. Use markdown for lists or tables if it enhances clarity.`;

    const fullPrompt = `
      System Instruction: ${systemInstruction}

      Here is the current academic data in JSON format:
      ${JSON.stringify(data, null, 2)}

      User's Request: "${prompt}"

      Please generate the report based on this data and the request.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: fullPrompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error generating report with Gemini API:", error);
    if (error instanceof Error) {
      return `An error occurred while generating the report: ${error.message}`;
    }
    return "An unknown error occurred while generating the report.";
  }
};
