import HabitActionTypes, {HabitAction} from "./habit.types";
import {Habit} from "../../types/HabitTypes";

export type HabitState = {
    isFetching: boolean
    errorMessage: string
    erroneous: boolean
    habit?: Habit
};
const INITIAL_STATE : HabitState = {
    isFetching: false,
    errorMessage: "",
    erroneous: false,
}

const habitReducer = (state : HabitState = INITIAL_STATE, action : HabitAction) : HabitState => {
    console.log("reducer action:", action.type);
    switch(action.type) {
        case (HabitActionTypes.FETCH_HABIT_SUCCESS):
            return {
                ...state,
                isFetching: false,
                habit: action.payload
            };
        case (HabitActionTypes.FETCH_HABIT_FAILURE):
            return {
                ...state,
                isFetching: false,
                erroneous: true,
                errorMessage: "error"
            };
        case (HabitActionTypes.FETCH_HABIT_START):
            return {
                ...state,
                isFetching: true,
            };
        default:
            console.log("default");
            return state;
    }
};

export default habitReducer;
