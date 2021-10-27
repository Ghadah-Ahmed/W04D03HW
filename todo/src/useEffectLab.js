import React from 'react'

export default function UseEffectLab() {
    const [windowWidth, setWindowWidth] = React.useState(0);


    React.useEffect(() => {
        function handleResize() {
            setWindowWidth( window.innerWidth)
    }
    window.addEventListener('resize', handleResize) 
      })

    return (
        <div>
            <h1>{windowWidth}</h1>
        </div>
    )
}
