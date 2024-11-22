import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookFlight from "../components/BookFlight";
import Header from "../components/Header";
import { useEffect } from "react";
import Explore from "./Explore";

function Home() {

    return (
        <>
            <Header />
            <div className="h-20"></div>
            {/* <BookFlight /> */}
            <Routes>
                <Route path="/" element={<BookFlight />} />
                <Route
                    path="/explore"
                    element={<Explore />}
                />
            </Routes>
        </>
    );
}

export default Home;
