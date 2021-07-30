import React from 'react';
import './Title.css';

const Title = ({today}) => {
    return(
        <div className='mainTitle'>
            <h1>{(today.locale('ru').format('MMMM')).toUpperCase()}, {(today.format('YYYY'))}</h1>
        </div>
    )
}

export default Title;