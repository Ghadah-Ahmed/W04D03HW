import React from 'react'
import axios from 'axios';

export default function W04D04HW() {

    const [resourceType, setResourceType] = React.useState("anime");
    const [items, setItems] = React.useState([]);


    React.useEffect(() => {
    const getData = () => {
        axios.get(`https://kitsu.io/api/edge//trending/${resourceType}`)
        .then(data => setItems(data.data.data))
        .catch(err => console.log(err))
    }
    getData()
      }, [resourceType]);

      const convertType = (type) =>{
        setResourceType(type)
      }

    return (
        <div>
            <div className='W04D04HW-button'>
                <button value='anime' onClick={e => convertType(e.target.value)} >Anime</button>
                <button value='manga' onClick={e => convertType(e.target.value)}>Manga</button>
            </div>
            <div className='W04D04HW-div'>
                {items.map((item)=> (
                    <div key={item.id} className='W04D04HW-card'>
                        <img src={item.attributes.posterImage.small} />
                        <h3>{item.attributes.slug}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
