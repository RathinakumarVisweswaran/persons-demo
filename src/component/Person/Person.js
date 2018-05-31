import React from 'react';
import './Person.css';
import Radium from 'radium';

const Person = (props) => {
    const professionStyle = { color: 'orange' };
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return <div className='Person' style={style}><p onClick={props.click}>{props.name} is a <span style={professionStyle}>{props.profession}</span></p></div>
}

export default Radium(Person);