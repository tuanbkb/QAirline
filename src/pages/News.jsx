import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMockNews, getAllNews } from "../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RectangleCard from "../components/RectangleCard";
import { useSelector, useDispatch } from "react-redux";
import { newsFetched } from "../redux/newsSlice";
import { selectNewsByClassification } from "../redux/newsSelector";

const NewsPage = () => {
  // const newsList = useSelector((state) => state.news);
  const filteredNewsList = useSelector((state) =>
    selectNewsByClassification(state, ["NEWS", "OFFER"])
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await getAllNews();
      dispatch(newsFetched(response.results));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="flex h-full justify-center">
      <div className="max-w-6xl">
        <h1 className="mt-4 text-3xl text-theme-primary font-bold text-center">
          NEWS & OFFERS
        </h1>
        <div className=" grid grid-cols-2 gap-5 mt-5">
          {filteredNewsList.map((news, index) => (
            <RectangleCard
              key={news.id}
              name={news.title}
              imageUrl={news.imageUrl}
              onCardClick={() => {
                navigate(`/news/${index}`, { state: news });
              }}
            />
          ))}
        </div>
        <div className="h-10"></div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default NewsPage;
