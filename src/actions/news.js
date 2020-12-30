import { fetchNews } from './api';

export const getNews = ({ page = 1 } = {}) => {
  return (dispatch) => {
    dispatch({ type: "GET_NEWS_FETCHING", payload: { page }});
    
    dispatch(fetchNews({ page })).then(resp => {
      console.log("resp: ", resp);
      dispatch({ type: "GET_NEWS_SUCCESS", payload: { data: resp.data, page }});
    }).catch(error => {
      dispatch({ type: "GET_NEWS_ERROR", payload: { error }})
    });
  };
};
