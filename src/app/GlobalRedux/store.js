'use client';
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web

import userReducer from './features/User/userSlice'
import courseReducer from './features/Courses/courseSlice';

// Configure persist options
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['auth'],
};

// Wrap reducers with persistReducer
const persistedUserReducer = persistReducer(persistConfig, userReducer);
const persistedCourseReducer = persistReducer(persistConfig, courseReducer);

// Combine persisted reducers
const rootReducer = {
  user: persistedUserReducer,
  course: persistedCourseReducer,
};

// Configure the store
export const store = configureStore({
  reducer: rootReducer,
});

// Create a persistor object
export const persistor = persistStore(store);
