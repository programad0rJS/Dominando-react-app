import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategoria = ({Daniel}) => {
      
    const [inputValue, setInputValue] = useState('');

    const ALomi = ( e ) => {
        setInputValue( e.target.value );
    }


    const JosueRey = (e) => {
        e.preventDefault();

      
      if(inputValue.trim().length > 2){
        Daniel(cats => [ ...cats , inputValue ]);
        setInputValue('');
      }
    }

    return (
        <>
           
          <from onSubmit={JosueRey}>
          <input 
                type="text"
                value={ inputValue }
                onChange={ALomi}
            />
          </from>
        
        </>
    )
}

AddCategoria.propTypes = {
    Daniel: PropTypes.func.isRequired
}


export default AddCategoria;
