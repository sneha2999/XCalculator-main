import React,{useState} from 'react';
import "./Calculator.css";

function Calculator() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const keyArr = [7,8,9,'+',4,5,6,'-',1,2,3,'*',"C",0,'=','/'];
  const handleEvalute = ()=>{
    if(expression){
      setResult(eval(expression).toString())
    }else{
      setResult('Error')
    }
  }
  const handleBtnClick = (val)=>{
    setExpression((prevExpression)=>prevExpression+val)
  }
  const handleClear = ()=>{
      setExpression("")
  } 
  return (
    <div className="calculator">
      <div className='input-field'>
        <input type="text" value={expression} readOnly/>
        <p>{result}</p>
      </div>
      <div className='buttons'>
        {
          keyArr.map((value)=>(
           
            <button key={value} onClick={()=>(value === "C" ? handleClear():(value==="="? handleEvalute():handleBtnClick(value)))}>
                {value}
            </button>
          ))
        }
      
      </div>
    </div>
  );
}

export default Calculator;
