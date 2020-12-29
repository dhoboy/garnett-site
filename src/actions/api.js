import axios from "axios";

const api = axios.create({
  baseURL: "http://garnettmellen.com/wp-json/wp/v2",
});

export const initAPI = () => {
  return (dispatch) => {
    dispatch({ type: "INIT_API_LOADING" });
    api.get("/categories").then(resp => {
      const payload = resp.data.reduce((prev, next) => {
        const totalPages = Math.ceil(next.count / 10);
        prev[next.name.toLowerCase()] = { ...next, totalPages };
        return prev;
      }, {});
      dispatch({ type: "INIT_API_SUCCESS", payload });
    }).catch(error => {
      dispatch({ type: "INIT_API_ERROR", payload: { error }});
    });
  };
};

export const fetchNews = () => {
  return (dispatch, getState) => {    
    const { news = {} } = getState().api;
    console.log("news batch: ", news);
    return api.get(`/posts?categories=${news.id}`);
  }
};

/*export const fetchBio = () => {
  return api.get("/posts?category=bio");
};

export const fetchTestimonial = () => {
  return api.get("/posts?category=testimonial");
};*/
