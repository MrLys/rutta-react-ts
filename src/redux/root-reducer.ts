import { combineReducers } from "redux";
import habitReducer from "./habit/habit.reducer";
const rootReducer = combineReducers({
    habit: habitReducer
});

export default rootReducer;