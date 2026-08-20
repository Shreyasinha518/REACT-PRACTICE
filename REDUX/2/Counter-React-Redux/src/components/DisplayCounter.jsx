import { useSelector } from "react-redux";

const DisplayCounter=()=>{
    const {counterVal}=useSelector(store=>store.counter);
   // const counter=counterObj.counterVal;
    return <p className="lead mb-4">COUNTER CURRENT {counterVal}</p>

};
export default DisplayCounter;