import { useState, useEffect } from "react";

export function InProg({data}) {
    const [unmastered, setUnmastered] = useState(() => {
        const saved = localStorage.getItem("Unmastered");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("Unmastered", JSON.stringify(unmastered));
      }, [unmastered]);

    const saveWord = () => {
        if (!unmastered.find(item => item.word === data.word)) {
          setUnmastered(prev => [...prev, data]);
        }
      };

    return (
        <div>
          <button className="save-btn" class="btn btn-outline-primary" onClick={saveWord}>
            Save this word to 'In progress'
          </button>
      
          {unmastered.length > 0 && (
            <div>
              <h2>In progess</h2>
              <ul className="list-unstyled">
                {unmastered.map((entry, index) => (
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
