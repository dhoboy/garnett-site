import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getNews } from "../actions/news";
import NewsCard from "./NewsCard";
import Loader from "./Loader";

const News = () => {
  const dispatch = useDispatch();
  const apiInitialized = useSelector(state => state.api.initialized);
  const page = useSelector(state => state.news.page);
  const totalPages = useSelector(state => state.api.news?.totalPages || 1);

  const loading = useSelector(state => state.news.loading);
  const error = useSelector(state => state.news.error);
  const data = useSelector(state => state.news.data, shallowEqual);
  const loadMore = useSelector(state => state.news.loadMore);

  useEffect(() => {
    apiInitialized && !data.length && dispatch(getNews());
  }, [dispatch, apiInitialized, data]);

  const handleLoadMore = () => {
    dispatch(getNews({ page: page + 1 }));
  };

  return (
    <div className="news">
      <Loader loading={loading} error={error}>
        {data.map(item => {
          return <NewsCard key={item.id} {...item} />;
        })}
        {page < totalPages && (
          <Loader loading={loadMore}>
            <p className="load-more">
              <span onClick={handleLoadMore}>Load More</span>
            </p>
          </Loader>
        )}
      </Loader>
    </div>
  )
};

export default News;
