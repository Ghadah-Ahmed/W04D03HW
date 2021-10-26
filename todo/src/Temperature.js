import React from 'react'

export default function Temperature() {

    const [fahrenheit, setFahrenheit] = React.useState(0);
    const [celsius, setCelsius] = React.useState(0);


    const convertCTF = num => {
        setFahrenheit(((num * 1.8) + 32).toFixed(1))
        setCelsius(num)
    }

    const convertFTC = num => {
        setCelsius(((num - 32) * .5556).toFixed(1))
        setFahrenheit(num)
    }

    return (
        <div>
            <form className='temperature-form'>
                <fieldset>
                    <legend>Enter temperature in Celsius:</legend>
                    <input value={celsius} onChange={e => convertCTF(e.target.value)}/>
                </fieldset>

                <fieldset>
                     <legend>Enter temperature in Fahrenheit:</legend>
                     <input value={fahrenheit} onChange={e => convertFTC(e.target.value)}/>
                </fieldset>
            </form>
        </div>
    )
}

