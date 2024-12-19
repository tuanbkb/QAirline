import { useEffect, useState } from "react";
import axios from "axios";
import RectangleCard from "../components/RectangleCard";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/image/backgroundLowOpacity.png";

function Explore() {
  const [destinationList, setDestinationList] = useState([]);
  const navigate = useNavigate();

  const fetchDestinations = async () => {
    const res = await axios.get("/destinationsData.json");
    setDestinationList(res.data);
  };
  useEffect(() => {
    fetchDestinations();
  }, []);

  const handleClickDestination = (index) => {
    navigate(`/explore/${index}`);
  };

  return (
    <div
      style={{
        background: `url(${backgroundImage})`,
        paddingTop: 5,
      }}
    >
      <div className="max-w-6xl m-auto mb-2">
        <h1 className="w-full font-bold text-3xl text-theme-primary mt-5">
          Checkout some of these spectacular destinations!
        </h1>
        <div className="grid grid-cols-3 mt-5 gap-2">
          {destinationList.map((destination, index) => {
            return (
              <div
                className={
                  index % 4 === 0 || index % 4 === 3
                    ? "col-span-2"
                    : "col-span-1"
                }
                key={index}
              >
                <RectangleCard
                  imageUrl={destination.image}
                  name={destination["province/state"]}
                  onCardClick={() => handleClickDestination(index)}
                />
              </div>
            );
          })}
        </div>
        <div className="h-10"></div>
      </div>
    </div>
  );
}

export default Explore;
