enum HabitStates {
    NONE = 'none',
    CHECKED = 'checked',
    SKIPPED = 'skipped',
    FAILED = 'failed'
};
export type Habit = {
    name : string
    id : number
    state : Groove[]
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