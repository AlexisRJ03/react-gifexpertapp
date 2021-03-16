import React from 'react'
//import { getGif } from '../helpers/getGif';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    /* const [images, setimages] = useState([])

    useEffect(() => {
        getGif(category)
            .then(imgs => setimages(imgs))
    }, [category]) */

    const {data:images, loading} = useFetchGifs(category);
    
    

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {loading && <p className="animate__animated animate__flash">Loading</p>}

            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id} 
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
