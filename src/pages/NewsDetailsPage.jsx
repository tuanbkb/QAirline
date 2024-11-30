import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMockNews, fetchNewsApi } from "../api/api";

const NewsDetailsPage = () => {
  const { id } = useParams(); // Get the news ID from the URL
  const [news, setNews] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const response = await fetchMockNews(); // Fetch all news
    const selectedNews = response.find((item) => item.id === parseInt(id));
    setNews(selectedNews);
  };

  if (!news) {
    return <p className="text-gray-600 text-lg">Loading...</p>;
  }

  return (
    <div className="flex justify-center mt-5">
      <div className="w-[70vw]">
        <button
          className="border border-blue-500 text-blue-500 rounded px-4 py-2 hover:bg-blue-50"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <p className="mt-2 text-gray-500 text-sm">Category: {news.category}</p>
        <h1 className="mt-4 text-2xl font-bold text-gray-800">{news.title}</h1>
        <p className="mt-4 text-gray-700 text-base">{news.content}</p>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
