import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reposReducer from './reposReducer';

const rootReducer = combineReducers({
  repos: reposReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
