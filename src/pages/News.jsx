import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMockNews, getAllNews } from "../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RectangleCard from "../components/RectangleCard";

const NewsPage = () => {
  const [newsList, setNewsList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await getAllNews(); // Fetching from fake API
      setNewsList(response.results);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleSeeMore = (id) => {
    navigate(`/news/${id}`); // Navigate to the news detail page
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="w-[70vw]">
        <h1 className="mt-4 text-2xl text-grey-800">NEWS & OFFERS</h1>
        <div className=" grid grid-cols-2 gap-5 mt-5">
          {newsList.map((news) => (
            <RectangleCard
              key={news.id}
              name={news.title}
              imageUrl={news.imageUrl}
              onCardClick={() => handleSeeMore(news.id)}
            />
          ))}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default NewsPage;
