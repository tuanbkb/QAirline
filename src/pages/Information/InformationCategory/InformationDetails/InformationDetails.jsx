import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getNewsById } from "../../../../api/api";
import BackButton from "../../../../components/BackButton";

export default function InformationDetails() {
  const location = useLocation();
  const { folder, id } = useParams();
  const [news, setNews] = useState(location.state);
  const navigate = useNavigate();

  useEffect(() => {
    if (!news) {
      fetchNews();
    }
  }, []);

  const fetchNews = async () => {
    const selectedNews = await getNewsById(id);
    setNews(selectedNews.results);
  };

  if (!news) {
    return <p className="text-gray-600 text-lg">Loading...</p>;
  }

  return (
    <div className="max-w-4xl m-auto">
      <img
        src={news.imageUrl}
        alt="Descriptive text"
        className="w-full max-h-[300px] object-cover object-[center_top]"
      />
      <div className="flex justify-center mt-5">
        <div className="w-[70vw]">
          {/* <button
            className="border border-blue-500 text-blue-500 rounded px-4 py-2 hover:bg-blue-50"
            onClick={() => navigate(-1)}
          >
            Back
          </button> */}
          <BackButton />
          <p className="mt-2 text-gray-500 text-sm">Folder: {news.folder}</p>
          <p className="mt-2 text-gray-500 text-sm">
            Classification: {news.classification}
          </p>
          <h1 className="mt-4 text-2xl font-bold text-gray-800">
            {news.title}
          </h1>
          <div>
            {news.content.split("\n").map((line, index) => {
              return (
                <p key={index} className="mt-2 text-gray-700 text-base">
                  {line}
                </p>
              );
            })}
            {/* <p className="mt-4 text-gray-700 text-base">{news.content}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
