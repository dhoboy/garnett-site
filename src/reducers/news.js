const initialState = {
  loading: true,
  loadMore: false,
  error: false,
  data: [],
  page: 1,
};

const news = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case "GET_NEWS_FETCHING":
      return {
        ...state,
        [+payload.page > 1 ? "loadMore" : "loading"]: true,
        error: false,
      }
    
    case "GET_NEWS_SUCCESS":
      return {
        ...state,
        data: state.data.concat(payload.data),
        page: payload.page,
        loading: false,
        loadMore: false,
        error: false,
      };
    
    case "GET_NEWS_ERROR": 
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
}

export default news;
