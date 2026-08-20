import { useDispatch } from "react-redux";
import { useRef } from "react";
import { counterActions } from "../Store/counter";
import { privacyActions } from "../Store/privacy";

const Control=()=>{

    const dispatch=useDispatch();
    const inputElement=useRef();
    const handleIncrement=()=>{
        console.log("INCREMENT CALLED");
      dispatch(counterActions.increment());

    };
    const handleDecrement=()=>{
         console.log("DECREMENT CALLED");
      dispatch(counterActions.decrement());

    };
   const  handleAdd=()=>{
    dispatch(counterActions.add(
        {
            num:inputElement.current.value,
        }
    ));
    
    inputElement.current.value = "";   
};
       const handleSubstract=()=>{
            dispatch(counterActions.substract(
        {
            num:inputElement.current.value,
        }
    )
)
    };
    
    const handlePrivacyToggle=()=>{
        dispatch(privacyActions.toggle());
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