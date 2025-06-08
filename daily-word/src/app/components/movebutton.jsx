"use client";

export function MoveButton({ word, setUnmastered, setKnownWords, unmastered }) {
  const moveWord = () => {

    setUnmastered(prev => prev.filter(item => item.word !== word.word));
    

    setKnownWords(prev => 
      prev.some(item => item.word === word.word) 
        ? prev 
        : [...prev, word]
    );
  };

  return (
    <button className="move-btn" onClick={moveWord}>
      Move to Mastered
    </button>
  );
}