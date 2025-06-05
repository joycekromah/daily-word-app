"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [saved, setSaved] = useState([]);

  const fetchNewWord = 

  const saveWord = () => {
    if (!saved.find(item => item.word === data.word)) {
      setSaved(prev => [...prev, data]);
    }
  };

  if (!data) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1 className="text-center">{data.word}</h1>
      <p>"{data.shortdef}"</p>
    </div>
  );
}
