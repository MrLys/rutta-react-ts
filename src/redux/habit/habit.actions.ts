import HabitActionTypes from "./habit.types";
import HabitStates, {Groove, Habit} from "../../types/HabitTypes";

export const fetchHabitsStart = () => {
    console.log("fetchHabitsStart")
    return {type: HabitActionTypes.FETCH_HABITS_START};
};

export const fetchHabitsFailure = (error : any) => ({
    type: HabitActionTypes.FETCH_HABITS_FAILURE,
    payload: error
});

export const fetchHabitsSuccess = (habits: Array<Habit>) => ({
    type: HabitActionTypes.FETCH_HABITS_SUCCESS,
    payload: habits
});

export const markGrooves = (mark : HabitStates,grooves : Array<Groove>) => ({
    type: HabitActionTypes.MARK_GROOVE
});

export const selectGroove = ()
