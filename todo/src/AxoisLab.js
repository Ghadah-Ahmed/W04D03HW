import React from 'react'
import axios from 'axios';

export default function AxoisLab() {

    const [img, setImg] = React.useState('');

    const getData = () => {
        axios.get(`https://dog.ceo/api/breeds/image/random`)
        .then(data => setImg(data.data.message))
        .catch(err => console.log(err))
    }

    return (
        <div>
            <img className='axoisLab-img' src={img}/>
            <button onClick={e => getData()}>NEW IMG</button>
        </div>
    )
}
