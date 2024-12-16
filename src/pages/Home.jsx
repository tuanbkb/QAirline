import { Route, Routes, useLocation } from "react-router-dom";
import BookFlight from "../components/Home/BookFlight";
import Header from "../components/Header/Header";
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
import Checkout from "./Checkout";
import Profile from "./Profile";
import BookingHistory from "./BookingHistory";
import Footer from "../components/Footer/Footer";
import RectangleCard from "../components/RectangleCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Home() {
  const location = useLocation();
  const [destinationList, setDestinationList] = useState([]);
  const navigate = useNavigate();

  const fetchDestinations = async () => {
    const res = await axios.get("/destinationsData.json");
    setDestinationList(res.data);
  };

  useEffect(() => {
    fetchDestinations();
    const routeTitles = {
      "/explore": "Explore",
      "/explore/:destinationId": "Destination Details",
      "/searchflight": "Search Flight",
      "/shoppingcart": "Shopping Cart",
      "/filldetails": "Fill Details",
      "/checkout": "Checkout",
      "/bookingresult": "Booking Result",
      "/info": "Information",
      "/info/:folder": "Information Category",
      "/info/:folder/:id": "Information Details",
      "/result": "Booking Result",
      "/news": "News",
      "/news/:id": "News Details",
      "/profile": "Profile",
      "/bookinghistory": "Booking History",
    };

    const currentTitle = routeTitles[location.pathname] || "QAirline";
    document.title = currentTitle;
  }, [location]);

  const handleClickDestination = (index) => {
    navigate(`/explore/${index}`);
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="h-5"></div>
      <div className="px-2 min-h-[calc(100vh-256px)]">
        <Routes>
          <Route
            path="/"
            element={
              <div className="m-auto">
                <div className="h-5"></div>
                <BookFlight />
                <div className="m-auto text-center my-5 text-3xl font-bold text-theme-primary">
                  Recommended destinations
                </div>
                <Carousel
                  ssr={true}
                  responsive={responsive}
                  className="max-w-6xl m-auto"
                >
                  {destinationList.map((destination, index) => {
                    return (
                      <div className="mr-5" key={index}>
                        <RectangleCard
                          imageUrl={destination.image}
                          name={destination["province/state"]}
                          onCardClick={() => handleClickDestination(index)}
                        />
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            }
          />
          <Route path="/explore" element={<Explore />} />
          <Route
            path="/explore/:destinationId"
            element={<DestinationDetails />}
          />
          <Route path="/searchflight" element={<SearchFlight />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/filldetails" element={<FillDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/bookingresult" element={<BookingResult />} />
          <Route path="/info" element={<InformationPage />} />
          <Route path="/info/:folder" element={<InformationCategory />} />
          <Route path="/info/:folder/:id" element={<InformationDetails />} />
          <Route path="/result" element={<BookingResult />} />
          <Route path="/news" element={<NewsPage />}></Route>
          <Route path="/news/:id" element={<NewsDetailsPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bookinghistory" element={<BookingHistory />} />
        </Routes>
      </div>
      <div className="h-10"></div>
      <Footer />
    </div>
  );
}

export default Home;
