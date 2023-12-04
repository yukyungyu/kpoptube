import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Today from "./pages/Today";
import Artist from "./pages/Artist";
import Youtube from "./pages/Youtube";
import Channel from "./pages/Channel";
import Video from "./pages/Video";
import Search from "./pages/Search";
import Not from "./pages/Not";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/today" element={<Today />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/channel" element={<Channel />} />
        <Route path="/video" element={<Video />} />
        <Route path="/search/:searchId" element={<Search />} />
        <Route path="*" element={<Not />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
