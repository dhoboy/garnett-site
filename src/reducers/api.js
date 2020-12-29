const initialState = {
  // initialize the wordpress api
  loading: false, 
  error: false, 
  initialized: false,
  
  // sections from the wordpress
  bio: null,
  news: null,
  testimonial: null,
}

const api = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "INIT_API_LOADING": 
      return {
        ...state,
        loading: true,
        error: false,
      };

    case "INIT_API_SUCCESS":
      return {
        ...state,
        ...payload,
        loading: false,
        error: false,
        initialized: true,
      };
    
    case "INIT_API_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };

    default: 
      return state;
  };

};

export default api;
