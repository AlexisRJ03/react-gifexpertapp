import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['One Punch']);

    /*const handleAdd = () => {
        //setCategorias(cats => [...cats, 'Pokemon']);
        const nuevoState = [...categorias, 'Pokemon'];
        setCategorias(nuevoState);
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias} />
            <hr/>

            <ol>
                {
                    categorias.map(category => {
                        return <GifGrid
                            key = {category}
                            category = {category}
                        />
                    })
                }
            </ol>
        </>
    )
}
