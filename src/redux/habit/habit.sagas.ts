import {all, call, put, takeEvery, takeLatest} from "redux-saga/effects";
import {fetchHabitsFailure, fetchHabitsSuccess} from "./habit.actions";
import HabitStates, {Habit} from "../../types/HabitTypes";
import HabitActionTypes from "./habit.types";
import data from "../../Data";

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


export function* habitSagas(){
    yield all([
        call(onFetchHabitsStart),
        call(onFetchHabitsSuccess)
    ]);
}