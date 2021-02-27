import { useState, useEffect } from "react";
import Parser from "html-react-parser";
import "./App.css";
import Header from "./Header";

function App() {
  const [lyrics, setLyrics] = useState(null);

  const getData = async (artist, song) => {
    try {
      const result = await fetch(`/api/hello?artist=${artist}&song=${song}`);
      const data = await result.json();
      if (data.lyrics) {
        setLyrics(data.lyrics);
      } else {
        setLyrics(data.error);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData("khalid", "talk");
  }, []);

  const formhandler = (e) => {
    e.preventDefault();
    if (e.target.artist.value && e.target.song.value) {
      getData(e.target.artist.value, e.target.song.value);
    }
    e.target.reset();
  };

  return (
    <>
      <Header handler={formhandler} />

      <div className="sad">{lyrics && Parser(lyrics)}</div>
    </>
  );
}

export default App;
