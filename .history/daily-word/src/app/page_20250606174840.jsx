"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [saved, setSaved] = useState([]);
  const [known, setKnown] = useState([]);
  const [savedSortOrder, setSavedSortOrder] = useState("asc");
  const [knownSortOrder, setKnownSortOrder] = useState("asc");

  const fetchNewWord = () => {
    fetch("/api/dictionary")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(console.error);
  };

  const saveWord = () => {
    if (!saved.find((item) => item.word === data.word)) {
      setSaved((prev) => [...prev, data]);
    }
  };

  const alreadyKnow = () => {
    if (!known.find((item) => item.word === data.word)) {
      setKnown((prev) => [...prev, data]);
    }
  };

  const playAudio = () => {
    if (!data.audio) return;

    let subdir = "number";
    if (data.audio.startsWith("bix")) subdir = "bix";
    else if (data.audio.startsWith("gg")) subdir = "gg";
    else if (/^[a-zA-Z]/.test(data.audio)) subdir = data.audio[0];

    const audioUrl = `https://media.merriam-webster.com/audio/prons/en/us/mp3/${subdir}/${data.audio}.mp3`;

    const audio = new Audio(audioUrl);
    audio.play();
  };

  const toggleSavedSort = () => {
    setSavedSortOrder((prev) => (prev == "asc" ? "desc" : "asc"));
  };

  const toggleKnownSort = () => {
    setKnownSortOrder((prev) => (prev == "asc" ? "desc" : "asc"));
  };

  const sortedSaved = [...saved].sort((a, b) => {
    return savedSortOrder === "asc"
      ? a.word.localeCompare(b.word)
      : b.word.localeCompare(a.word);
  });

  const sortedKnown = [...known].sort((a, b) => {
    return knownSortOrder === "asc"
      ? a.word.localeCompare(b.word)
      : b.word.localeCompare(a.word);
  });

  const moveToKnown = (learntWord) => {
    setSaved(prev => prev.filter(item => item.word !== learntWord.word));
    if (!known.find.item(item => item.word === learntWord.word)) {
      setKnown prev => [...prev, learntWord]
    }
  }

  useEffect(() => {
    fetchNewWord();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="container text-center">
      {/* Box 1 - Main */}
      <div className="main-box">
        <h1>{data.word.split(":")[0]}</h1>
        <p>"{data.shortdef.split(":")[0]}"</p>

        <div className="button-group">
          <button className="word-btn" onClick={fetchNewWord}>
            New Word
          </button>
          <button className="alreadyKnow-btn" onClick={alreadyKnow}>
            Already know
          </button>
          <button className="save-btn" onClick={saveWord}>
            Save
          </button>
          <button className="audio-btn" onClick={playAudio}>
            Listen
          </button>
        </div>
      </div>

      {/* Box 2 - Saved words */}
      {saved.length > 0 && (
        <div className="saved-box">
          <div className="mt-5 text-start">
            <div className="saved-header">
              <h2>Saved Words</h2>
              <button className="sort-btn" onClick={toggleSavedSort}>
                Sort: {savedSortOrder === "asc" ? "A-Z" : "Z-A"}
              </button>
            </div>

            <ul className="list-unstyled">
              {sortedSaved.map((entry, index) => (
                <li key={index} className="mb-2">
                  <span>
                    <strong>{entry.word.split(":")[0]}</strong>: "{entry.shortdef}"
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Box 3 - Known words */}
      {known.length > 0 && (
        <div className="known-box">
          <div className="mt-5 text-start">
            <div className="known-header">
              <h2>Known words</h2>
              <button className="sort-btn" onClick={toggleKnownSort}>
                Sort: {knownSortOrder === "asc" ? "A-Z" : "Z-A"}
              </button>
            </div>

            <ul className="list-unstyled">
              {sortedKnown.map((entry, index) => (
                <li key={index} className="mb-2">
                  <strong>{entry.word.split(":")[0]}</strong>: "{entry.shortdef}"
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
