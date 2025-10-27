import React from "react";

export default function ResumeForm({ value, onChange }) {
  const set = (key, val) => onChange({ ...value, [key]: val });

  return (
    <div className="space-y-3">
      <input className="border p-2 w-full" placeholder="Full Name" value={value.name} onChange={e => set("name", e.target.value)} />
      <input className="border p-2 w-full" placeholder="Title" value={value.title} onChange={e => set("title", e.target.value)} />
      <input className="border p-2 w-full" placeholder="Email" value={value.email} onChange={e => set("email", e.target.value)} />
      <input className="border p-2 w-full" placeholder="Phone" value={value.phone} onChange={e => set("phone", e.target.value)} />
      <textarea className="border p-2 w-full" placeholder="Summary" value={value.summary} onChange={e => set("summary", e.target.value)} />
    </div>
  );
}
