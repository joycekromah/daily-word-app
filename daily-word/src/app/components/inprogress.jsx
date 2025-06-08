"use client";
import { useState } from "react";
import { SortButtonList } from "./sortbutton";
import { MoveButton } from "./movebutton";

export function SavedWords({ data, unmastered, setUnmastered, knownWords, setKnownWords }) {
  const [sortOrder, setSortOrder] = useState("asc");

  const saveWord = () => {
    if (!unmastered.some(item => item.word === data.word)) {
      setUnmastered(prev => [...prev, data]);
    }
  };

  const sortedUnmastered = [...unmastered].sort((a, b) => 
    sortOrder === "asc" 
      ? a.word.localeCompare(b.word) 
      : b.word.localeCompare(a.word)
  );

  return (
    <div className="known-box">
      <button className="save-btn" onClick={saveWord}>
        Save this word to 'In progress'
      </button>

      {sortedUnmastered.length > 0 && (
        <div>
          <h2>In Progress</h2>
          <SortButtonList sortOrder={sortOrder} onSort={setSortOrder} />
          <ul className="list-unstyled">
            {sortedUnmastered.map((entry, index) => (
              <li key={index} className="mb-2">
                <strong>{entry.word}</strong>: "{entry.shortdef}"
                <MoveButton
                  word={entry}
                  setUnmastered={setUnmastered}
                  setKnownWords={setKnownWords}
                  unmastered={unmastered}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}