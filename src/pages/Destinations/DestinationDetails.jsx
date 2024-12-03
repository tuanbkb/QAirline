import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";

export default function DestinationDetails() {
  const { destinationId } = useParams();
  const [destination, setDestination] = useState({ data: "Init" });
  const navigate = useNavigate();

  const getDestination = async () => {
    const res = await axios.get("/destinationsData.json");
    console.log(res.data[destinationId]);
    setDestination(res.data[destinationId]);
  };

  useEffect(() => {
    getDestination();
  }, []);

  return (
    <div>
      <img
        src={destination.image}
        alt="Image"
        className="w-full h-[250px] object-cover"
      />
      <div className="flex justify-center mt-5">
        <div className="w-[70vw]">
          <BackButton />

          <h1 className="mt-4 text-2xl font-bold text-gray-800">
            {destination["province/state"]}
          </h1>
          <div>
            {destination["data"].split("<br>").map((line, index) => {
              return (
                <p key={index} className="mt-2 text-gray-700 text-base">
                  {line}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
