import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookFlight from "../components/BookFlight";
import Header from "../components/Header";

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
                    element={
                        <h1 className="text-9xl">
                            FUCK YEAHH
                            <h1 className="text-9xl">FUCKYOU</h1>
                        </h1>
                    }
                />
            </Routes>
            <div className="bg-theme-primaryContainer h-96"></div>
        </>
    );
}

export default Home;
