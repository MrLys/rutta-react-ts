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

export const markGrooves = (mark : HabitStates) => ({
    type: HabitActionTypes.MARK_GROOVE,
    payload: mark
});

export const selectGroove = (groove: Groove) => ({
    type: HabitActionTypes.SELECT_GROOVE,
    payload: groove
});

export const fetchHabitStart = (id : number) => ({
    type: HabitActionTypes.FETCH_HABIT_START,
    payload: id
});

export const fetchHabitFailure = (error: any) => ({
    type: HabitActionTypes.FETCH_HABIT_FAILURE,
    payload: error
});

export const fetchHabitSuccess = (habit : Habit) => ({
    type: HabitActionTypes.FETCH_HABIT_SUCCESS,
    payload: habit
});

