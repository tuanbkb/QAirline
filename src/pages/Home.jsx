import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import background from "../assets/image/background.jpg";
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

function Home() {
    const location = useLocation();

    useEffect(() => {
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

    return (
        <div className="min-h-screen">
            <Header />
            <div className="h-20"></div>
            {/* <div
                className="w-screen h-60 bg-cover bg-bottom mb-10 mt-4"
                style={{ backgroundImage: `url(${background})` }}
            ></div> */}
            <div className="px-2 min-h-[calc(100vh-356px)]">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <BookFlight />
                                {/* ADD SOME GIBBERISH HERE */}
                            </>
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
                    <Route
                        path="/info/:folder"
                        element={<InformationCategory />}
                    />
                    <Route
                        path="/info/:folder/:id"
                        element={<InformationDetails />}
                    />
                    <Route path="/result" element={<BookingResult />} />
                    <Route path="/news" element={<NewsPage />}></Route>
                    <Route path="/news/:id" element={<NewsDetailsPage />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route
                        path="/bookinghistory"
                        element={<BookingHistory />}
                    />
                </Routes>
            </div>
            <div className="h-20"></div>
            <Footer />
        </div>
    );
}

export default Home;
