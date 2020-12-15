import React from 'react';
import './habit.styles.scss';
import {fetchHabitsStart} from "../../redux/habit/habit.actions";
import {connect} from "react-redux";
import {selectHabit} from "../../redux/habit/habit.selector";
import {GlobalState, Habit} from "../../types/types";
import {Card} from "@material-ui/core";

type HabitPageProps = {
    habit : Habit
}


type HabitPagePropsDispatch = HabitPageProps & {fetchHabit : any}
const HabitPage = ({fetchHabit, ...props} : HabitPagePropsDispatch) => {
    const { habit } = props;
    if (habit.id < 1) {
        return (
            <div>
                Could not find the habit you are looking for!
            </div>
        )
    } else {
        return (
            <Card>
            <div className="habit-page-container">
                <div className="habit-name-container">
                <h1 className="title">{`${habit.name}  ${habit.streak} `} 🔥</h1>
                </div>
            </div>
            </Card>
        )

    }
};
const mapStateToProps = (state : GlobalState, ownProps : HabitPageProps & {match : any}) : HabitPageProps => ({
        habit: selectHabit(ownProps.match.params.id)(state),
});
const mapDispatchToProps = (dispatch : any) => ({
    fetchHabits: () => dispatch(fetchHabitsStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(HabitPage);