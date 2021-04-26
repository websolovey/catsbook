const initialState = {
  news: [],
  loading: true,
  error: false,
};

const reducerNews = (state = initialState, action) => {
  switch (action.type) {
    case "NEWS_LOADED":
      return {
        news: action.payload,
        loading: false,
        error: false,
      };
    case "NEWS_REQUESTED":
      return {
        news: state.menu,
        loading: true,
        error: false,
      };
    case "NEWS_ERROR":
      return {
        news: state.menu,
        loading: true,
        error: true,
      };
    default:
      return state;
  }
};

export default reducerNews;
