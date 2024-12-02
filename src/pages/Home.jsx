import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookFlight from "../components/BookFlight";
import Header from "../components/Header";
import { useEffect } from "react";
import Explore from "./Explore";
import NewsDetailsPage from "./NewsDetailsPage";
import NewsPage from "./News";
import SearchFlight from "./SearchFlight";
import ShoppingCart from "./ShoppingCart";
import FillDetails from "./FillDetails";
import BookingResult from "./BookingResult";
import InformationPage from "./Information/InformationPage";

function Home() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<BookFlight />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/searchflight" element={<SearchFlight />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/filldetails" element={<FillDetails />} />
        <Route path="/info" element={<InformationPage />} />
        <Route path="/result" element={<BookingResult />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsDetailsPage />} />
      </Routes>
    </>
  );
}

export default Home;
