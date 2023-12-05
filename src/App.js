import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/section/Main";

// 비동기적으로 컴포넌트 로드
const Home = lazy(() => import("./pages/Home"));
const Today = lazy(() => import("./pages/Today"));
const Artist = lazy(() => import("./pages/Artist"));
const Youtube = lazy(() => import("./pages/Youtube"));
const Channel = lazy(() => import("./pages/Channel"));
const Video = lazy(() => import("./pages/Video"));
const Search = lazy(() => import("./pages/Search"));
const Not = lazy(() => import("./pages/Not"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
