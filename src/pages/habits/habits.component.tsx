import React, {useEffect} from "react";
import HabitItem from "../../components/habit-item/habit-item.component";
import "./habits.styles.scss"
import HabitStates, {Groove, Habit} from "../../types/HabitTypes";
import HabitForm from "../../components/habit-form/habit-form.component";
import generateHabitWeek from "../../util/HabitUtil";
import { Button } from "@material-ui/core";
import {FiCheckCircle, FiMinusCircle, FiXCircle} from "react-icons/all";
import {GlobalState} from "../../types/types";
import { connect } from "react-redux";
import {fetchHabitsStart, markGrooves, selectGroove} from "../../redux/habit/habit.actions";
import {HabitState} from "../../redux/habit/habit.reducer";
import HabitWeek from "../../components/habit-week/habit-week.component";

type HabitsPageProps = {
    habits : Habit[]
}
export type State = {
    habit: GlobalState & HabitState
}

type HabitsPagePropsDispatch = HabitsPageProps & {fetchHabits : any, mark: any, selectGroove: any}

const HabitsPage = ({fetchHabits, mark, selectGroove, ...props} : HabitsPagePropsDispatch) => {
    useEffect(() => {
        fetchHabits();
    }, [props, fetchHabits]);
    if (props.habits?.length > 0) {
        return (
            <div>
                <div className="habits-container">
                    <div>
                        <HabitWeek />
                        {props.habits?.map((habit: Habit) => (
                            <HabitItem habit={habit} key={habit.id}/>
                        ))}

                    </div>
                </div>
                <Button variant="contained" color="primary" onClick={() => mark(HabitStates.CHECKED)}>
                    <FiCheckCircle />
                </Button>
                <Button variant="contained" color="secondary" onClick={() => mark(HabitStates.FAILED)}>
                    <FiXCircle />
                </Button>
                <Button variant="contained" onClick={() => mark(HabitStates.SKIPPED)}>
                    <FiMinusCircle />
                </Button>
            </div>
        );
    }
    return (
        <div className="habits-container">
            <HabitForm onClick={(value: string) => console.log("value")/*setHabits([{id: habits.length+habits.length+1, name: value, state: generateHabitWeek(new Date())},...habits])*/}/>
        </div>
    )
};
const mapStateToProps = (state : State, ownProps : HabitsPageProps) : HabitsPageProps => {
    return { habits: state.habit.habits}
};
const mapDispatchToProps = (dispatch : any) => ({
    fetchHabits: () => dispatch(fetchHabitsStart()),
    mark: (type: HabitStates) => dispatch(markGrooves(type)),
    selectGroove: (groove: Groove) => dispatch(selectGroove(groove))
});
export default connect(mapStateToProps, mapDispatchToProps)(HabitsPage);
