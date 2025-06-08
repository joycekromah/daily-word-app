"use client";
import { useEffect, useState } from "react";
import { AudioBtn } from "./components/audio";
import { KnownWords } from "./components/masteredword";
import { SavedWords } from "./components/inprogress";

export default function Home() {
  const [data, setData] = useState(null);
  const [unmastered, setUnmastered] = useState([]);
  const [knownWords, setKnownWords] = useState([]);


  useEffect(() => {
    const savedUnmastered = localStorage.getItem("Unmastered");
    const savedKnownWords = localStorage.getItem("knownWords");
    if (savedUnmastered) setUnmastered(JSON.parse(savedUnmastered));
    if (savedKnownWords) setKnownWords(JSON.parse(savedKnownWords));
  }, []);


  useEffect(() => {
    fetch("/api/dictionary")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(console.error);
  }, []);


  useEffect(() => {
    localStorage.setItem("Unmastered", JSON.stringify(unmastered));
  }, [unmastered]);

  useEffect(() => {
    localStorage.setItem("knownWords", JSON.stringify(knownWords));
  }, [knownWords]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="container">
      <meta httpEquiv="refresh" content="30"></meta>
      <h1 className="text-center">{data.word}</h1>
      <p>"{data.shortdef}"</p>
      <div>
        <AudioBtn data={data} />
        <KnownWords
          data={data}
          knownWords={knownWords}
          setKnownWords={setKnownWords}
        />
        <SavedWords
          data={data}
          unmastered={unmastered}
          setUnmastered={setUnmastered}
          knownWords={knownWords}
          setKnownWords={setKnownWords}
        />
      </div>
    </div>
  );
}
