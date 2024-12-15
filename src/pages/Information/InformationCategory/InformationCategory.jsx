import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getNewsByFolder } from "../../../api/api";
import RectangleCard from "../../../components/RectangleCard";
import { CircularProgress } from "@mui/material";

export default function InformationCategory() {
  const [informationList, setInformationList] = useState([]);
  const { folder } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInformation = async () => {
      const data = await getNewsByFolder(folder);
      setInformationList(data.results);
    };
    fetchInformation();
  }, []);

  if (informationList.length === 0) {
    return (
      <div className="flex justify-center items-center h-[89vh] gap-2">
        <CircularProgress sx={{ color: "#69548D" }} />
        <div className="text-gray-600 text-lg">Loading...</div>
      </div>
    );
  }
  return (
    <div className="flex justify-center mt-5">
      <div className="w-[70vw]">
        <h1 className="mt-4 text-2xl font-bold text-grey-800">
          {folder.toUpperCase().replace("-", " ")}
        </h1>
        <div className="grid grid-cols-2 gap-5 mt-5">
          {informationList.map((information) => (
            <RectangleCard
              imageUrl={information.imageUrl}
              name={information.title}
              onCardClick={() => {
                navigate(`/info/${folder}/${information.id}`, {
                  state: information,
                });
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
