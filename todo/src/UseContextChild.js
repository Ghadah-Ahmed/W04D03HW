import React from 'react'
import { ThemeContext } from './UseContextLab';

export default function UseContextChild() {
    let value = React.useContext(ThemeContext)
    const [value1, setValue1] = React.useState("");

    return (
        <div className='UseContextChild-div'>
            <button value='arabic' onClick={(e)=>  setValue1(value.arabic)} >arabic</button>
            <button value='english' onClick={(e)=>  setValue1(value.english)}>english</button>
            <button value='japanese' onClick={(e)=>  setValue1(value.japanese)}>japanese</button>  

            <h1>{value1.text} </h1>
            <img width='550px' src={value1.image}/>
        </div>
    )
}
