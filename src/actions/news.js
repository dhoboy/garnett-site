import { fetchBio, fetchNews } from './api';

export const getNews = () => {
  return (dispatch) => {
    dispatch({ type: "GET_NEWS_FETCHING", payload: { getNews: "true" }});
    
    dispatch(fetchNews()).then(resp => {
      console.log("resp: ", resp);
      dispatch({ type: "GET_NEWS_SUCCESS", payload: { data: resp.data }});
    }).catch(error => {
      dispatch({ type: "GET_NEWS_ERROR", payload: { error }})
    });
  };
};
