import React from "react";

export default function Preview({ resume }) {
  return (
    <div id="resume-preview" className="text-sm border rounded p-3">
      <h1 className="text-xl font-bold">{resume.name}</h1>
      <p>{resume.title}</p>
      <p>{resume.email} | {resume.phone}</p>
      <p className="mt-2">{resume.summary}</p>
    </div>
  );
}
