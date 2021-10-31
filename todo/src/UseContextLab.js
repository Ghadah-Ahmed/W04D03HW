import React from 'react'
import UseContextChild from './UseContextChild';
import img1 from './desert.jpeg'
import img2 from './london.jpeg'
import img3 from './japan.jpeg'

export const ThemeContext = React.createContext();

export default function UseContextLab() {

     const themes = {
        arabic: {
          image: img1,
          text: 'السلام عليكم ورحمة الله',
        },
        english: {
          image: img2,
          text: 'Hello',
        },
        japanese: {
            image: img3,
            text: 'こんにちは',
          }
      };
      
    return (
        <div>
         <ThemeContext.Provider value={themes}>
            <UseContextChild/>
         </ThemeContext.Provider>   
        </div>
    )
}
