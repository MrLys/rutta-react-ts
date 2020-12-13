import HabitActionTypes, {HabitAction} from "./habit.types";
import {Habit} from "../../types/HabitTypes";
import markGrooves, {selectGroove} from "./habit.util";

export type HabitsState = {
    isFetching: boolean
    errorMessage: string
    erroneous: boolean
    habits: Array<Habit>
};
const INITIAL_STATE : HabitsState = {
    isFetching: false,
    errorMessage: "",
    erroneous: false,
    habits: [],
}

const habitsReducer = (state : HabitsState = INITIAL_STATE, action : HabitAction) : HabitsState => {
    console.log("reducer action:", action.type);
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
                erroneous: true,
                errorMessage: "error"
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
        default:
            console.log("default");
            return state;
    }
};

export default habitsReducer;
