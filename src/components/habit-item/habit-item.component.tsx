import React, {useEffect, useState} from "react";
import "./habit-item.styles.scss";
import StatefulBox from '../stateful-box/stateful-box.component';
import {Groove, Habit} from "../../types/HabitTypes";
import {Link} from "react-router-dom";
type HabitItemProps = {
    habit: Habit
}
const HabitItem = (props: HabitItemProps) => {
  return (
      <div className="habit-container" >
        <Link to={() => `/habit/${props.habit.id}`} color="inherit" className="habit-name" >{props.habit.name}</Link>
        <div className="week-container">
            {props?.habit.state.map((state: Groove) =>
                (
                    <StatefulBox groove={state} key={state.id}/>
                ))}
        </div>
      </div>
  );
};

export default HabitItem;
