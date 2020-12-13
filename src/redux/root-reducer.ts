import { combineReducers } from "redux";
import habitsReducer from "./habit/habitsReducer";
import habitReducer from "./habit/habitReducer";
const rootReducer = combineReducers({
    habits: habitsReducer,
    habit: habitReducer
});

export default rootReducer;