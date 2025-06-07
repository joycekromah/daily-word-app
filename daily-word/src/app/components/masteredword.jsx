import { useState } from "react";

export function Mastered({data}) {
    const [saved, setSaved] = useState([]);

    const saveWord = () => {
        if (!saved.find(item => item.word === data.word)) {
          setSaved(prev => [...prev, data]);
        }
      };

    return (
        <div>
          <button className="save-btn" onClick={saveWord}>
            Save this word to 'Mastered words'
          </button>
      
          {saved.length > 0 && (
            <div>
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
//        <button className="save-btn" onClick={saveWord}>Save this word to 'In progress'</button>
