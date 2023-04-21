
import CounterSlice from "./features/counter/CounterSlice";
import { combineReducers } from '@reduxjs/toolkit';
import PostsSlice from "./features/counter/PostsSlice";
const rootReducer = combineReducers({
    counter: CounterSlice,
    posts: PostsSlice
});

export default rootReducer;