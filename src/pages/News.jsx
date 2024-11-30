import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMockNews, fetchNewsApi } from "../api/api";

const NewsPage = () => {
  const [newsList, setNewsList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const response = await fetchMockNews(); // Fetching from fake API
    setNewsList(response);
  };

  const handleSeeMore = (id) => {
    navigate(`/news/${id}`); // Navigate to the news detail page
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="w-[70vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {newsList.map((news) => (
          <div
            key={news.id}
            className="flex flex-col justify-between bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="p-4 flex-grow">
              <h3 className="text-lg font-semibold text-gray-800">
                {news.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {news.content.slice(0, 100)}...
              </p>
            </div>
            <div className="flex justify-end p-2">
              <button
                className="border border-blue-500 text-blue-500 px-3 py-1 rounded hover:bg-blue-50"
                onClick={() => handleSeeMore(news.id)}
              >
                See More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
