import React, {useEffect, useState} from "react";
import "./stateful-box.styles.scss";
import classNames from "classnames";
import HabitStates, {Groove} from "../../types/HabitTypes";
import {connect, useDispatch} from "react-redux";
import {selectGroove} from "../../redux/habit/habit.actions";
type StateFulBoxProps = {
  groove: Groove
};
const StatefulBox = ({ groove, selectAction } : {groove : Groove, selectAction : any}) => {
  const className = classNames('innerBox', groove.state, {selected: groove.selected, unselected: !groove.selected});
  return <div className='box' onClick={() => selectAction(groove)}>
    <div className={className} />
  </div>;
};
const mapStateToProps = (state : StateFulBoxProps, ownProps : StateFulBoxProps) : StateFulBoxProps => {
  return state
};
const mapDispatchToProps = (dispatch: any) => ({
  selectAction: (groove : Groove) => dispatch(selectGroove(groove))
})
export default connect(mapStateToProps, mapDispatchToProps)(StatefulBox);
