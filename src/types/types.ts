export type HabitState = {
    isFetching: boolean
    habits: Array<Habit>
};
export type FeedbackState = {
    hasError: boolean
    errorMessage: string
    hasWarning: boolean
    warningMessage: string
    hasInfo: boolean
    infoMessage: string
    hasSuccess: boolean
    successMessage: string
}

export type GlobalState = {
    feedback: FeedbackState
    habit: HabitState
}


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
    streak: number
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