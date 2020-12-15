import HabitActionTypes, {HabitAction} from "./habit.types";
import markGrooves, {addHabit, selectGroove} from "./habit.util";
import {HabitState} from "../../types/types";

const INITIAL_STATE : HabitState = {
    isFetching: false,
    habits: [],
};

const habitReducer = (state : HabitState = INITIAL_STATE, action : HabitAction) : HabitState => {
    switch(action.type) {
        case (HabitActionTypes.FETCH_HABITS_SUCCESS):
            return {
               ...state,
                isFetching: false,
                habits: action.payload
            };
        case (HabitActionTypes.FETCH_HABITS_FAILURE):
            return {
                ...state,
                isFetching: false,
            };
        case (HabitActionTypes.FETCH_HABITS_START):
            return {
                ...state,
                isFetching: true,
            };
        case HabitActionTypes.MARK_GROOVE:
            return {
                ...state,
                habits: markGrooves(state.habits, action.payload)
            };
        case HabitActionTypes.SELECT_GROOVE:
            return {
                ...state,
                habits: selectGroove(state.habits, action.payload)
            };
        case HabitActionTypes.ADD_HABIT_START:
            return {
                ... state,
                isFetching: true
            };
        case HabitActionTypes.ADD_HABIT_FAILURE:
            return {
                ... state,
            };
        case HabitActionTypes.ADD_HABIT_SUCCESS:
            return {
                ... state,
                habits: addHabit(state.habits, action.payload)
            };
        default:
            console.log("default", action.type, action.payload);
            return state;
    }
};

export default habitReducer;
