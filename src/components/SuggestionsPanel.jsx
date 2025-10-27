import React from "react";

export default function SuggestionsPanel({ suggestions }) {
  if (!suggestions) return <p className="text-gray-400 text-sm mt-3">No AI suggestions yet.</p>;

  return (
    <div className="mt-3">
      <h3 className="font-medium mb-2">AI Suggestions:</h3>
      <ul className="list-disc ml-5">
        {suggestions.improvements?.map((s, i) => (
          <li key={i}>
            <b>{s.title}:</b> {s.detail}
          </li>
        ))}
      </ul>
    </div>
  );
}
