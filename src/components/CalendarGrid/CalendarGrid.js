import React from 'react';
import moment from 'moment'
import GridItem from '../GridItem/gridItem';
import './CalendarGrid.css';

const CalendarGrid = ({daysMap, day, today, todoList, onCreateTask}) => (
    <>  
        <div className='gridTitle'>
            {[...Array(7)].map((item,i) => (
                    <div key={i}>
                        {moment().day(i+1).locale('ru').format('ddd')}
                    </div>
                ))}
        </div>
        <div className='gridWrapper'>
            {daysMap.map(item => (
                <GridItem  
                    key={item.format('DD-MM-YYYY')} 
                    item={item} 
                    day={day} 
                    today={today} 
                    todoList={todoList} 
                    onCreateTask={onCreateTask}
                />
            ))}

        </div>
    </>
)

export default CalendarGrid;