import {all,  put} from "redux-saga/effects";
import * as Effects from "redux-saga/effects";
import {addHabitSuccess, fetchHabitsSuccess, fetchHabitSuccess} from "./habit.actions";
import HabitActionTypes, {HabitAction} from "./habit.types";
import data from "../../Data";
import {HabitException} from "../../util/HabitUtil";
import {Habit} from "../../types/types";
import {putError, putSuccess} from "../feedback/feedback.action";

const call: any = Effects.call;
const takeEvery: any = Effects.takeEvery;
const takeLatest: any = Effects.takeLatest;
const fetchHabits = () :Array<Habit> => {
    return data;
};
export function* fetchHabitsAsync() {
    yield put(fetchHabitsSuccess(fetchHabits()))
}

export function* onFetchHabitsStart() {
    yield takeEvery(HabitActionTypes.FETCH_HABITS_START, fetchHabitsAsync)
}

const fetchHabit = (id : number) : Habit => {
    const ret = data.find((habit: Habit) => habit.id === id);
    if (ret) {
        return ret;
    }
    else {
        throw new HabitException("Invalid id", "fetchHabit");
    }
};
export function* fetchHabitAsync(action : any) {
    try {
        yield put(fetchHabitSuccess(fetchHabit(action.payload)))
    } catch (e) {
        throw new HabitException(e.message, "fetchHabitAsync")
    }
}
const addHabitStore = (name: string) : string => {
    const rnd = Math.random();
    if (rnd > 0.5) {
        return name;
    }

    throw new HabitException("Failed for random reasons", "addHabitStore");
};
export function* addHabit(action : HabitAction) {
    try {
        yield put(addHabitSuccess(addHabitStore(action.payload)));
        yield put(putSuccess(`Successfully added ${action.payload} 🎉`))
    } catch(e) {
        yield put(putError(e.message))
    }

}
export function* fetchHabitFailure(action : HabitAction) {
    yield put(putError(action.payload))
}

export function* onFetchHabitStart() {
    yield takeLatest(HabitActionTypes.FETCH_HABIT_START, fetchHabitAsync)
}

export function* onAddHabitStart() {
    yield takeEvery(HabitActionTypes.ADD_HABIT_START, addHabit)
}




export function* habitSagas(){
    yield all([
        call(onFetchHabitsStart),
        call(onFetchHabitStart),
        call(onAddHabitStart),
    ]);
}