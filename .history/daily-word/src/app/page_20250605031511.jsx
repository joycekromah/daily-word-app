"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [saved, setSaved] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

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
    if (data.audio.startsWith('bix')) subdir = 'bix';
    else if (data.audio.startsWith('gg')) subdir = 'gg';
    else if (/^[a-zA-Z]/.test(data.audio)) subdir = data.audio[0];

    const audioUrl = `https://media.merriam-webster.com/audio/prons/en/us/mp3/${subdir}/${data.audio}.mp3`;

    const audio = new Audio(audioUrl);
    audio.play();
  }

  const SortAlpha = () => {
    setSortOrder(prev => (prev == "asc" ? "desc" : "asc"));
  };

  const sortedSaved = [...saved].sort((a, b) => {
    return sortOrder === "asc"
      ? a.word.localCompare(b.word)
      : b.word.localCompare(a.word);
  });

  useEffect(() => {
    fetchNewWord();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="container text-center">
      <h1>{data.word}</h1>
      <p>"{data.shortdef}"</p>
      <div className="d-flex justify-content-center gap-3 mt-3">
        <button className="word-btn" onClick={fetchNewWord}>New Word</button>
        <button className="save-btn" onClick={saveWord}>Save</button>
          <button className="audio-btn" onClick={playAudio}>Listen</button>
      </div>

      {saved.length > 0 && (
        <div className="mt-5 text-start">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h2>Saved Words</h2>

          </
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
