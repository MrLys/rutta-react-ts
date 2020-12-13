import {Habit} from "../../types/HabitTypes";

enum HabitActionTypes {
    FETCH_HABITS_START = "FETCH_HABITS_START",
    FETCH_HABITS_SUCCESS = "FETCH_HABITS_SUCCESS",
    FETCH_HABITS_FAILURE = "FETCH_HABITS_FAILURE",
    FETCH_HABIT_START = "FETCH_HABIT_START",
    FETCH_HABIT_SUCCESS = "FETCH_HABIT_SUCCESS",
    FETCH_HABIT_FAILURE = "FETCH_HABIT_FAILURE",
    MARK_GROOVE = "MARK_GROOVE",
    SELECT_GROOVE = "SELECT_GROOVE"
};

export type HabitAction = {
    type: HabitActionTypes
    payload: any
}
export default HabitActionTypes;