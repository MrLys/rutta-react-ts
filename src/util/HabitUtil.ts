import HabitStates, {HabitWeek} from "../types/types";

export const addDays = (date: Date, num: number) : Date => {
    return new Date(date.setDate(num))
};

const getMonday = (d: Date): Date => {
    d = new Date(d);
    const day = d.getDay(),
        diff = d.getDate() - day + (day === 0 ? -6:1); // adjust when day is sunday
    return new Date(d.setDate(diff));
};
export const generateWeek = (date: Date) : Array<Date> => {
    const monday = getMonday(date);
  let week: Array<Date> = [monday];
  for (let i = 1; i < 7; i++) {
      week.push(new Date(monday.setDate(i)))
  }
  return week;
};
const generateHabitWeek = (date: Date) :HabitWeek => {
    let week: HabitWeek= { state: [] };
    const monday = getMonday(date);
    week.state.push({date:  monday, id: 1, state: HabitStates.NONE, selected: false})
    for (let i = 1; i < 7;i++) {
        week.state.push({date: new Date(monday.setDate(i)), id: i+1, state: HabitStates.NONE, selected: false})
    }
    return week;
};

export class HabitException extends Error {
   location: string;
   constructor(message: string, location : string) {
       super(message);
       this.location = location;
   }
};
export default generateHabitWeek;