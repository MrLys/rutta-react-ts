import {all,  put} from "redux-saga/effects";
import * as Effects from "redux-saga/effects";
import {fetchHabitsSuccess, fetchHabitSuccess} from "./habit.actions";
import {Groove, Habit} from "../../types/HabitTypes";
import HabitActionTypes from "./habit.types";
import data from "../../Data";

const call: any = Effects.call;
const takeEvery: any = Effects.takeEvery;
const takeLatest: any = Effects.takeLatest;
const fetchHabits = () :Array<Habit> => {
    return data;
}
export function* fetchHabitsAsync() {
    yield put(fetchHabitsSuccess(fetchHabits()))
}
export function* doneWithHabitAsync() {
}


export function* onFetchHabitsStart() {
    yield takeEvery(HabitActionTypes.FETCH_HABITS_START, fetchHabitsAsync)
}

export function* onFetchHabitsSuccess() {
    yield takeEvery(HabitActionTypes.FETCH_HABITS_SUCCESS, doneWithHabitAsync)
}

const fetchHabit = (id : number) : Habit => {
    console.log(id);
    const ret = data.find((habit: Habit) => habit.id === id);
    if (ret) {
        return ret;
    }
    else {
        throw new Error("Invalid id");
    }
}
export function* fetchHabitAsync(action : any) {
    try {
        yield put(fetchHabitSuccess(fetchHabit(action.payload)))
    } catch (e) {
        throw e
    }
}



export function* onFetchHabitStart() {
    yield takeLatest(HabitActionTypes.FETCH_HABIT_START, fetchHabitAsync)
}

export function* onFetchHabitSuccess() {
    yield takeLatest(HabitActionTypes.FETCH_HABIT_SUCCESS, () => {})
}




export function* habitSagas(){
    yield all([
        call(onFetchHabitsStart),
        call(onFetchHabitsSuccess),
        call(onFetchHabitStart),
        call(onFetchHabitSuccess),
    ]);
}