import React from 'react';
import './habit-week.styles.scss';

type Day = {
    id: number
    name: string
}
const a = [{id: 1, name: 'Monday'},
    {id: 2, name: 'Tuesday'},
    {id: 3, name: 'Wednesday'},
    {id: 4, name: 'Thursday'},
    {id: 5, name: 'Friday'},
    {id: 6, name: 'Saturday'},
    {id: 7, name: 'Sunday'}];
const strip = (name : string) : string => {
   return name.slice(0, 3);
};
const HabitWeek = () => {
    return (
        <div className="habit-container" >
        <div className="week-container">
        {a.map((day : Day) => (
            <div className='box unselected week' key={day.id}>
                    {strip(day.name)}
            </div>
            ))
        }
        </div>
        </div>
    )
};

export default HabitWeek;