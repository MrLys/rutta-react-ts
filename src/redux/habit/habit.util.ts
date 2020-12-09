import { Habit} from "../../types/HabitTypes";

const markGrooves = (habits : Array<Habit>, {mark, grooves} :any) : Array<Habit> => {
    for (let i = 0; i < habits.length;i ++) {
        for (let j = 0; j < habits[i].state.state.length; j++) {
            for (let k = 0; k < grooves.length; k++) {
                if(habits[i].state.state[j].id === grooves[k].id) {
                    habits[i].state.state[j].state = mark;
                }
            }
        }
    }
    return habits;
}

export default markGrooves;