'use client';
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/dictionary")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(console.error);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1 className="text-center">{data.word}</h1>
      <p>"{data.shortdef}"</p>
    </div>
  )
  }
