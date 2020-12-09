import React, { useEffect } from "react";
import "./habit-item.styles.scss";
import StatefulBox from '../stateful-box/stateful-box.component';
import {Groove, Habit} from "../../types/HabitTypes";
type HabitItemProps = {
    habit: Habit
}
const HabitItem = (props: HabitItemProps) => {
  useEffect(() => {
    console.log("hello");
  }, []);
  return (
      <div className="habit-container" >
        <p className="habit-name">{props.habit.name}</p>
        <div className="week-container">
            {props?.habit.state.state.map((state: Groove) =>
                (
                    <StatefulBox groove={state}/>
                ))}
        </div>
      </div>
  );
};

export default HabitItem;
