import React, {useState} from 'react';
import {connect} from "react-redux";
import {addHabitStart} from "../../redux/habit/habit.actions";
import {FiMinusCircle} from "react-icons/all";
import {Button} from "@material-ui/core";
import "./habit-form.styles.scss";

const HabitForm = ({addHabits}: {addHabits: any}) => {
    const [value, setValue] = useState("");
    return (
        <div className="habit-form-container">
            <input className="habit-form-input" type="text" value={value} onChange={(v) => setValue(v.target.value)}/>
            <Button variant="contained" onClick={() => addHabits(value)} startIcon={<FiMinusCircle />}>
              Add
        </Button>
        </div>
    );
};

const mapDispatchToProps = (dispatch : any) => ({
    addHabits: (name: string) => dispatch(addHabitStart(name))
});
export default connect(null, mapDispatchToProps)(HabitForm);