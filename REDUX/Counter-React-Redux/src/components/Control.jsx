import { useDispatch } from "react-redux";
import { useRef } from "react";

const Control=()=>{

    const dispatch=useDispatch();
    const inputElement=useRef();
    const handleIncrement=()=>{
        dispatch({type:"INCREMENT"});

    };
    const handleDecrement=()=>{
        dispatch({type:"DECREMENT"});

    };
   const  handleAdd=()=>{
        dispatch({
            type:"ADD",
            payload:{
                num:inputElement.current.value
            }
        })
    
    inputElement.current.value = "";   
};
       const handleSubstract=()=>{
        dispatch({
            type:"SUBSTRACT",
            payload:{
                num:inputElement.current.value
            }
        })
        inputElement.current.value = "";   
    };
    
    const handlePrivacyToggle=()=>{
        dispatch({type:"PRIVACY_TOGGLE"})

    }
    return(
        <>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"> <button type="button" className="btn btn-primary" onClick={handleIncrement}>+1</button>

<button type="button" className="btn btn-success"onClick={handleDecrement}>-1</button>
<button type="button" class="btn btn-warning" onClick={handlePrivacyToggle}>PRIVACY TOGGLE</button>
</div>


 <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row"> <button className="number-input"><input type="text" placeholder="ENTER NUMBER"
 ref={inputElement}
 ></input></button>

<button type="button" className="btn btn-info"onClick={handleAdd}>ADD</button>
<button type="button" className="btn btn-danger"onClick={handleSubstract}>SUBSTRACT</button>
</div>


        

</>
    );
};
export default Control;