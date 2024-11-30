import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookFlight from "../components/BookFlight";
import Header from "../components/Header";
import { useEffect } from "react";
import Explore from "./Explore";
import NewsDetailsPage from "./NewsDetailsPage";
import NewsPage from "./News";

function Home() {
  return (
    <>
      <Header />
      <div className="h-20"></div>
      {/* <BookFlight /> */}
      <Routes>
        <Route path="/" element={<BookFlight />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsDetailsPage />} />
      </Routes>
    </>
  );
}

export default Home;
