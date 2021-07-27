import React, { useState } from 'react'
import AddCategoria from './components/AddCategoria';
const GifExpertApp = () => {

   // const categories = ['Josue', 'Daniel', 'Piero', 'Jhosep', 'ZonyuGil' ];
    const [categories, setCategories] = useState(['Josue', 'Daniel', 'Piero', 'Jhosep', 'ZonyuGil']);

    //const Josue = () => {
    //    setCategories( ['JosueGuapo  ' , ...categories ])
    //}
 
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategoria  Daniel="Josue Josue" />
            

           
            <br />
            <br />
            <br />
            <br />
<br />
            {/*<button className="Boton" onClick={Josue}>Agregar</button>*/
            }

            <br />  

            {
                categories.map( categorias =>  {
                      return <li key={ categorias }>{ categorias }</li>  
                })
            }
        </>
    )
}

export default GifExpertApp;
