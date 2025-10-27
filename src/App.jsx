import React, { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import Preview from "./components/Preview";
import SuggestionsPanel from "./components/SuggestionsPanel";
import { suggestImprovements, saveResume } from "./api";

export default function App() {
  const [resume, setResume] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    summary: "",
    experiences: [],
    education: [],
    skills: []
  });
  const [suggestions, setSuggestions] = useState(null);

  const handleSuggest = async () => {
    const data = await suggestImprovements(resume);
    setSuggestions(data);
  };

  const handleSave = async () => {
    await saveResume(resume);
    alert("Resume saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white p-4 rounded-lg shadow">
          <h1 className="text-2xl font-bold mb-4">Smart Resume Builder</h1>
          <ResumeForm value={resume} onChange={setResume} />
          <div className="mt-4 flex gap-3">
            <button onClick={handleSuggest} className="bg-blue-600 text-white px-3 py-2 rounded">Get AI Suggestions</button>
            <button onClick={handleSave} className="bg-green-600 text-white px-3 py-2 rounded">Save Resume</button>
            <button onClick={() => window.print()} className="border px-3 py-2 rounded">Export PDF</button>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold mb-2">Preview</h2>
          <Preview resume={resume} />
          <SuggestionsPanel suggestions={suggestions} />
        </div>
      </div>
    </div>
  );
}
