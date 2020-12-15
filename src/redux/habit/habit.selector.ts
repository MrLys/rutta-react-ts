import {createSelector} from "reselect";
import {findHabit} from "./habit.util";
import {GlobalState, Habit, HabitState} from "../../types/types";

export const selectHabitState = (state : GlobalState) : HabitState => {
    console.log("mapStateToProps", state);
    console.log("mapStateToProps", state.habit);
    return state.habit
};

export const selectHabits = createSelector(
    [selectHabitState],
    (habits : HabitState) : Array<Habit> => habits.habits
);
export const selectHabit = (id : number) =>
    createSelector(
        [selectHabits],
        (habits : Array<Habit>) : Habit  => findHabit(habits, id)
    );

