import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getNews } from "../actions/news";
import NewsCard from "./NewsCard";

const News = () => {
  const dispatch = useDispatch();
  const apiInitialized = useSelector(state => state.api.initialized);
  const data = useSelector(state => state.news.data, shallowEqual);

  useEffect(() => {
    apiInitialized && dispatch(getNews());
  }, [dispatch, apiInitialized]);

  return (
    <div>
      {data.map(item => {
        return <NewsCard {...item} />;
      })}
    </div>
  )
};

export default News;
