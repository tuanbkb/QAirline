import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { fetchMockNews, getNewsById } from "../api/api";
import BackButton from "../components/BackButton";
import { CircularProgress } from "@mui/material";

const NewsDetailsPage = () => {
  const location = useLocation();
  const news = location.state;

  if (!news) {
    return (
      <div className="flex justify-center items-center h-[89vh] gap-2">
        <CircularProgress color="#69548D" />
        <div className="text-gray-600 text-lg">Loading...</div>
      </div>
    );
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
          <BackButton />
          {/*<p className="mt-2 text-gray-500 text-sm">Folder: {news.folder}</p>
          <p className="mt-2 text-gray-500 text-sm">
            Classification: {news.classification}
          </p> */}
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
};

export default NewsDetailsPage;
