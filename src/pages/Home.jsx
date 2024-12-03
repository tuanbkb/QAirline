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
import InformationCategory from "./Information/InformationCategory/InformationCategory";
import InformationDetails from "./Information/InformationCategory/InformationDetails/InformationDetails";
import DestinationDetails from "./Destinations/DestinationDetails";

function Home() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<BookFlight />} />
        <Route path="/explore" element={<Explore />} />
        <Route
          path="/explore/:destinationId"
          element={<DestinationDetails />}
        />
        <Route path="/searchflight" element={<SearchFlight />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/filldetails" element={<FillDetails />} />
        <Route path="/info" element={<InformationPage />} />
        <Route path="/info/:folder" element={<InformationCategory />} />
        <Route path="/info/:folder/:id" element={<InformationDetails />} />
        <Route path="/result" element={<BookingResult />} />
        <Route path="/news" element={<NewsPage />}></Route>
        <Route path="/news/:id" element={<NewsDetailsPage />} />
      </Routes>
    </>
  );
}

export default Home;
