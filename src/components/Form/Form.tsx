import React, { useState } from 'react';
import { getTime } from '../../functions/index.f';



const Form = () => {

    const [time, setTime] = useState<number>(0);
    
    return (
        <form onSubmit={()=> getTime(time)}>
            <div className='col-md-5 d-flex mx-auto mt-3'>
                <input type="number" 
                    placeholder="Ex: 5" 
                    className="form-control" 
                    onChange={(e)=> setTime(e.target.valueAsNumber)}/>
                <input type="submit" value="Definir tempo" className="btn-submit" />
            </div>
        </form>
    );
};




export default Form;