import { configureStore } from '@reduxjs/toolkit';
import subredditsAsideReducer  from '../features/SubAside/subredditsAsideSlice';
import filtersReducer from '../features/Filter/filterSlice';
import appReducer from '../app/App';

const store = configureStore({
  reducer: {
    subredditsAside: subredditsAsideReducer,
    app: appReducer,
    // theme: themeReducer,
    // search: searchReducer,
    filters: filtersReducer,
  },
});

export default store;