"use client";
import { useState } from "react";
import { SortButtonList } from "./sortbutton";

export function KnownWords({ data, knownWords, setKnownWords }) {
  const [sortOrder, setSortOrder] = useState("asc");

  const saveWord = () => {
    if (!knownWords.some(item => item.word === data.word)) {
      setKnownWords(prev => [...prev, data]);
    }
  };

  const sortedKnown = [...knownWords].sort((a, b) => 
    sortOrder === "asc" 
      ? a.word.localeCompare(b.word) 
      : b.word.localeCompare(a.word)
  );

  return (
    <div className="known-box">
      <button className="save-btn" onClick={saveWord}>
        Save this word to 'Mastered'
      </button>

      <div className="known-header">
        <h2>Mastered words</h2>
        <SortButtonList 
          sortOrder={sortOrder}
          onSort={setSortOrder}
        />
      </div>
      <ul className="list-unstyled">
        {sortedKnown.map((entry, index) => (
          <li key={index} className="mb-2">
            <strong>{entry.word.split(":")[0]}</strong>: "{entry.shortdef}"
          </li>
        ))}
      </ul>
    </div>
  );
}