export async function suggestImprovements(resume) {
  const res = await fetch('http://localhost:4000/api/suggest', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ resume })
  });
  return res.json();
}

export async function saveResume(resume) {
  const res = await fetch('http://localhost:4000/api/resumes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ resume })
  });
  return res.json();
}
