import React from "react";
import HabitItem from "../../components/habit-item/habit-item.component";
import "./habits-overview.styles.scss"
import HabitForm from "../../components/habit-form/habit-form.component";
import { Button } from "@material-ui/core";
import {FiCheckCircle, FiMinusCircle, FiXCircle} from "react-icons/all";
import HabitStates, {GlobalState, Groove, Habit} from "../../types/types";
import { connect } from "react-redux";
import {fetchHabitsStart, markGrooves, selectGroove} from "../../redux/habit/habit.actions";
import HabitWeek from "../../components/habit-week/habit-week.component";
import {selectHabits} from "../../redux/habit/habit.selector";

type HabitsOverviewProps = {
    habits : Habit[]
}

type HabitsOverviewPropsDispatch = HabitsOverviewProps & {fetchHabits : any, mark: any, selectGroove: any}

const HabitsOverview = ({ mark, habits} : HabitsOverviewPropsDispatch) => {
    if (habits?.length > 0) {
        return (
            <div className="habitWeek-container">
                <HabitForm />
                <div className="habits-container">
                    <div>
                        <HabitWeek />
                        {habits?.map((habit: Habit) => (
                            <HabitItem habit={habit} key={habit.id}/>
                        ))}

                    </div>
                </div >
                <div className="buttonContainer">
                    <Button variant="contained" color="primary" onClick={() => mark(HabitStates.CHECKED)} startIcon={<FiCheckCircle />}>
                        Success
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => mark(HabitStates.FAILED)} startIcon={<FiXCircle />}>
                        Failed
                    </Button>
                    <Button variant="contained" onClick={() => mark(HabitStates.SKIPPED)} startIcon={<FiMinusCircle />}>
                        Skipped
                    </Button>
                </div>
            </div>
        );
    }
    return (
        <div className="habits-container">
            <HabitForm />
        </div>
    )
};
const mapStateToProps = (state : GlobalState, ownProps : HabitsOverviewProps) : HabitsOverviewProps => ({
    habits: selectHabits(state)
});

const mapDispatchToProps = (dispatch : any) => ({
    fetchHabits: () => dispatch(fetchHabitsStart()),
    mark: (type: HabitStates) => dispatch(markGrooves(type)),
    selectGroove: (groove: Groove) => dispatch(selectGroove(groove))

});
export default connect(mapStateToProps, mapDispatchToProps)(HabitsOverview);