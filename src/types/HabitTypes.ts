enum HabitStates {
    NONE = '',
    CHECKED = 'checked',
    SKIPPED = 'skipped',
    FAILED = 'failed'
};
export type Habit = {
    name : string
    id : number
    state : HabitWeek
};
export type Groove = {
    id: number
    date: Date
    state: HabitStates
    selected: boolean
};
export type HabitWeek = {
    state: Groove[]
}

export default HabitStates;