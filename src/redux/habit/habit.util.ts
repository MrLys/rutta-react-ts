import HabitStates, {Groove, Habit} from "../../types/HabitTypes";

const markGrooves = (habits : Array<Habit>, mark : HabitStates) : Array<Habit> => {
    for (let i = 0; i < habits.length;i ++) {
        for (let j = 0; j < habits[i].state.length; j++) {
            if (habits[i].state[j].selected) {
                habits[i].state[j].state = mark;
                habits[i].state[j].selected = false;
            }
        }
    }
    console.log(habits, mark);
    return habits;
}
export const selectGroove = (habits : Array<Habit>, groove: Groove) : Array<Habit> => {
    for (let i = 0; i < habits.length;i ++) {
        for (let j = 0; j < habits[i].state.length; j++) {
            if (habits[i].state[j].id === groove.id) {
                habits[i].state[j].selected = !habits[i].state[j].selected;
            }
        }
    }
    return habits;
}


export default markGrooves;