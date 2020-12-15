import {createHabit} from "../../Data";
import HabitStates, {Groove, Habit} from "../../types/types";

const markGrooves = (habits : Array<Habit>, mark : HabitStates) : Array<Habit> => {
    for (let i = 0; i < habits.length;i ++) {
        for (let j = 0; j < habits[i].state.length; j++) {
            if (habits[i].state[j].selected) {
                habits[i].state[j].state = mark;
                habits[i].state[j].selected = false;
            }
        }
    }
    return habits;
};
export const selectGroove = (habits : Array<Habit>, groove: Groove) : Array<Habit> => {
    for (let i = 0; i < habits.length;i ++) {
        for (let j = 0; j < habits[i].state.length; j++) {
            if (Number(habits[i].state[j].id) === Number(groove.id)) {
                habits[i].state[j].selected = !habits[i].state[j].selected;
            }
        }
    }
    return habits;
};

export const findHabit = (habits : Array<Habit>, id : number) : Habit => {
    for (let i = 0; i < habits.length; i++) {
        if (Number(habits[i].id) === Number(id)) {
            return habits[i];
        }
    }
    return {name: "Invalid id!", id: -1, state: [], streak: -1};
};

export const addHabit = (habits: Array<Habit>, name: string) : Array<Habit> => {
    return [...habits, createHabit(name)]
};

export default markGrooves;