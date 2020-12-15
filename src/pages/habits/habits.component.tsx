import React, {useEffect} from "react";
import "./habits.styles.scss"
import { connect } from "react-redux";
import {fetchHabitsStart} from "../../redux/habit/habit.actions";
import HabitsOverview from "../../components/habits-overview/habits-overview.component";
import HabitPage from "../habit/habit.component";
import { Route } from "react-router-dom";


const HabitsPage = ({match, fetchHabits} : {match : any, fetchHabits: any} ) => {
    useEffect(() =>
        fetchHabits(), []
    );
    return (
        <div >
            <Route
                exact
                path={`${match.path}`}
                component={HabitsOverview}
            />
            <Route
                exact
                path={`${match.path}/:id`}
                component={HabitPage}
            />
        </div>
    );
};

const mapDispatchToProps = (dispatch : any) => ({
    fetchHabits: () => dispatch(fetchHabitsStart()),
});
export default connect(null, mapDispatchToProps)(HabitsPage);
