import React from "react";
import "./habit-item.styles.scss";
import StatefulBox from '../stateful-box/stateful-box.component';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {Groove, Habit} from "../../types/types";
type HabitItemProps = {
    habit: Habit
}
const HabitItem = (props : HabitItemProps) => {
    const {habit} = props;
  return (
      <div className="habit-container" >
        <div className="habit-name-container">
            <Link to={() => `habits/${habit.id}`} color="inherit" className="habit-name" >{habit.name}</Link>
            <span className="habit-streak">{habit.streak > 2 ?`${habit.streak} 🔥` : ``}</span>
            </div>
        <div className="week-container">
            {props?.habit.state.map((state: Groove) =>
                (
                    <StatefulBox groove={state} key={state.id}/>
                ))}
        </div>
      </div>
  );
};
export default connect()(HabitItem);
