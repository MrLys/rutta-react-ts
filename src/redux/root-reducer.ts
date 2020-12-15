import { combineReducers } from "redux";
import habitReducer from "./habit/habit.reducer";
import feedbackReducer from "./feedback/feedback.reducer";

const rootReducer = combineReducers({
    feedback: feedbackReducer,
    habit: habitReducer
});

export default rootReducer;