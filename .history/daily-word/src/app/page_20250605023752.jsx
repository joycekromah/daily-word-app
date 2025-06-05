"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [saved, setSaved] = useState([]);

  const fetchNewWord = () => {
    fetch("/api/dictionary")
    .then((res) => res.json())
    .then((json) => setData(json))
    .catch(console.error);
  };

  const saveWord = () => {
    if (!saved.find(item => item.word === data.word)) {
      setSaved(prev => [...prev, data]);
    }
  };

  const playAudio = () => {
    if (!data.audio) return;

    let subdir = 'number';
    if (data.audio.startsWith)
  }

  useEffect(() => {
    fetchNewWord();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="container text-center">
      <h1>{data.word}</h1>
      <p>"{data.shortdef}"</p>
      <div className="d-flex justify-content-center gap-3 mt-3">
        <button className="btn btn-primary" onClick={fetchNewWord}>New Word</button>
        <button className="btn btn-outline-success" onClick={saveWord}>Save</button>
      </div>

      {saved.length > 0 && (
        <div className="mt-5 text-start">
          <h2>Saved Words</h2>
          <ul className="list-unstyled">
            {saved.map((entry, index) => (
              <li key={index} className="mb-2">
                <strong>{entry.word}</strong>: "{entry.shortdef}"
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
