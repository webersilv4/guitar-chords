import React, { useState } from 'react';
import { getTime } from '../../functions/index.f';



const Form = () => {

    const [time, setTime] = useState<number>(0);
    
    return (
        <form id="formTime" onSubmit={()=> getTime(time)}>
            <input type="number" 
                placeholder="Ex: 5" 
                className="form-input" 
                onChange={(e)=> setTime(e.target.valueAsNumber)}/>
            <input type="submit" value="Definir tempo" className="btn-submit" />
        </form>
    );
};




export default Form;