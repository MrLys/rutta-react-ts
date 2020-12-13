import React, {useEffect} from 'react';
import {fetchHabitsStart, fetchHabitStart, markGrooves, selectGroove} from "../../redux/habit/habit.actions";
import HabitStates, {Groove, Habit} from "../../types/HabitTypes";
import {connect} from "react-redux";

type HabitPageProps = {
    habit : Habit
}


type HabitPagePropsDispatch = HabitPageProps & {fetchHabit : any} & {match : any}
const HabitPage = ({match , fetchHabit, habit} : HabitPagePropsDispatch) => {
    useEffect(() => {
        fetchHabit(match.params.id)
    },[habit, fetchHabit])
    return (
        <div>
            {habit.name}
        </div>
    )
};
const mapStateToProps = (state : HabitPageProps, ownProps : HabitPageProps) : HabitPageProps => {
    return { habit: state.habit}
};
const mapDispatchToProps = (dispatch : any) => ({
    fetchHabit: (id: number) => dispatch(fetchHabitStart(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(HabitPage);