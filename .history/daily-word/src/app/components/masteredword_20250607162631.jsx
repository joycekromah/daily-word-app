import { useState, useEffect } from "react";

export function Mastered({data}) {
  const [acquired, setAcquired] = useState(() => {
    const saved = localStorage.getItem("Mastered");
    return saved ? JSON.parse(saved) : [];
});

  useEffect(() => {
    localStorage.setItem("Mastered", JSON.stringify(acquired));
  }, [acquired]);

    const saveWord = () => {
        if (!acquired.find(item => item.word === data.word)) {
          setAcquired(prev => [...prev, data]);
        }
    }

    return (
        <div>
          <button className="save-btn" class="btn btn-outline-success" onClick={saveWord}>
            Save this word to 'Mastered words'
          </button>
      
          {acquired.length > 0 && (
            <div>
              <h2>Mastered words</h2>
              <ul className="list-unstyled">
                {acquired.map((entry, index) => (
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