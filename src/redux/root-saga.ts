import { all, call } from "redux-saga/effects";
import {habitSagas} from "./habit/habit.sagas";

export default function* rootSaga() {
    yield all([call(habitSagas)]);
}