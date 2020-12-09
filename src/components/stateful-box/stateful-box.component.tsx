import React, {useEffect, useState} from "react";
import "./stateful-box.styles.scss";
import classNames from "classnames";
import HabitStates, {Groove} from "../../types/HabitTypes";

const StatefulBox = ({ groove } : {groove : Groove}) => {
  const [selected, setSelected] = useState(groove.selected);
  const className = classNames('box', groove.state, {selected: groove, unselected: !groove.selected});
  return <div className={className} onClick={() => {groove.selected = !groove.selected; setSelected(groove.selected)}}/>;
};

export default StatefulBox;
