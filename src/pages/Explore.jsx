import { useEffect, useState } from "react";
import axios from "axios";
import RectangleCard from "../components/RectangleCard";
import { useNavigate } from "react-router-dom";

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
    <div className="max-w-6xl m-auto mb-2">
      <h1 className="text-theme-onPrimaryContainer mt-4 text-grey-800 text-2xl">
        EXPLORE
      </h1>
      <div className="grid grid-cols-3 mt-5 gap-2">
        {destinationList.map((destination, index) => {
          return (
            <div
              className={
                index % 4 === 0 || index % 4 === 3 ? "col-span-2" : "col-span-1"
              }
              key={destination.name}
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
    </div>
  );
}

export default Explore;
