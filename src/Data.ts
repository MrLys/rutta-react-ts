import {generateWeek} from "./util/HabitUtil";
import HabitStates, {Groove, Habit, HabitWeek} from "./types/HabitTypes";

const week = generateWeek(new Date());
const names = ["Run", "Walk", "Clean", "Stretch"];
let counter = 0;
const getState = () : HabitStates => {
    let r = Math.random();
    if (r <= (1/4)){
        return HabitStates.FAILED
    } else if (r <= 2/4) {
        return HabitStates.CHECKED
    } else if (r <= 3/4) {
        return HabitStates.SKIPPED
    } else {
        return HabitStates.NONE
    }
}
const createHabit = (name : string ) : Habit =>  {
    counter++;
    let habit : Habit = {
        name: name,
        id: counter,
        state: week.map((day : Date) : Groove => {counter++;return {id: counter, state: getState(), date: day, selected: false}})};
    return habit;
}
const generateHabits = () : Array<Habit> =>  {
    return names.map((name: string) : Habit => createHabit(name))
}
const data : Array<Habit> = generateHabits()
export default data;
