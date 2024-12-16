import { useNavigate } from "react-router-dom";
import RectangleCard from "../../components/RectangleCard";

export default function InformationPage() {
  const navigate = useNavigate();
  const folderList = [
    {
      imgUrl:
        "https://www.vietnamairlines.com/~/media/Images/VNANew/Landingpage%20Mega%20Menu/Travel%20Information/travel-information_1.jpg",
      name: "Check in",
    },
    {
      imgUrl:
        "https://www.vietnamairlines.com/~/media/Images/VNANew/Landingpage%20Mega%20Menu/Travel%20Information/travel-information_2.jpg",
      name: "Baggage",
    },
    {
      imgUrl:
        "https://www.vietnamairlines.com/~/media/Images/VNANew/Landingpage%20Mega%20Menu/Travel%20Information/travel-information_4.jpg",
      name: "Airport",
    },
    {
      imgUrl:
        "https://www.vietnamairlines.com/~/media/Images/VNANew/Landingpage%20Mega%20Menu/Travel%20Information/travel-information_5.jpg",
      name: "Travel guide",
    },
  ];
  return (
    <div className="max-w-6xl m-auto">
      <h1 className="mt-4 text-3xl text-theme-primary text-center font-bold">
        TRAVEL INFORMATION
      </h1>
      <div className="grid grid-cols-2 gap-5 mt-5">
        {folderList.map((folder) => (
          <RectangleCard
            key={folder.name}
            imageUrl={folder.imgUrl}
            name={folder.name}
            onCardClick={() => {
              navigate(`/info/${folder.name.replace(" ", "-").toLowerCase()}`);
            }}
          />
        ))}
      </div>
    </div>
  );
}
