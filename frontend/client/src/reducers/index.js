import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import postReducer from "./post.reducer";
import errorReducer from "./error.reducer";
import allPostsReducer from "./allPosts.reducer";
import trendingReducer from "./trending.reducer"; 

export default combineReducers({
    userReducer,
    postReducer,
    errorReducer, 
    allPostsReducer,
    trendingReducer
})