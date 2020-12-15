import React from "react";
import "./stateful-box.styles.scss";
import classNames from "classnames";
import {connect} from "react-redux";
import {selectGroove} from "../../redux/habit/habit.actions";
import {Groove} from "../../types/types";
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
});
export default connect(mapStateToProps, mapDispatchToProps)(StatefulBox);
