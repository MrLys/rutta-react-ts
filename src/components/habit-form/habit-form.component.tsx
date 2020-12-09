import React, {useState} from 'react';

const HabitForm = (props: any) => {
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState("");
    if (visible) {
        return (
        <div>
            <button onClick={() => setVisible(!visible)}> Click here to add </button>
        </div>);
    }
    return (
        <div className="habit-form-container">
            <input type="text" title="Jørgen plis" value={value} onChange={(v) => setValue(v.target.value)}/>
            <button onClick={() => {console.log(value); props.onClick(value);}}> Add </button>
        </div>
    );
};

export default HabitForm;