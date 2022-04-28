import React from 'react'
import "./Calc.css"

const Button = (props) => {

    const num = () => {
        var numbers = [];
        for(let i=0 ; i<10 ;i++){
            numbers.push(
                <button className='btn' value={i} onClick={props.enterdNum}>{i}</button>
            )
        }
        return numbers
    }

  return (
   <>
   <div className='calc'>
            <div className='calculator'>
           
                <div className='display'>
                    {props.inputValue? props.inputValue : "0"}

                </div>
                
                <div className='display'>
                    {props.finalAnswer? props.finalAnswer : "0"}
                </div>
               
                <div className='operator'>
                    <button className='btn' onClick={props.plusle}>+</button>
                    <button className='btn' onClick={props.minus} >-</button>
                    <button className='btn' onClick={props.multiply}>*</button>
                    <button className='btn' onClick={props.divide}>/</button>
                    <button className='btn' onClick={props.leftbracket}>(</button>
                    <button className='btn' onClick={props.rightbracket}>)</button>
                    <button className='btn' onClick={props.factorial}>!</button>
                    <button className='btn' onClick={props.square}>^2</button>
                    <button className='btn' onClick={props.squareroot}><sup>2</sup>√x</button>
                    <button className='btn' onClick={props.log}>log</button>
                    <button className='btn' onClick={props.backspace}>⌫</button>
                    <button className='btn' onClick={props.deleteAll}>AC</button>




                </div>
                <div className='number'>
                    {num()}
                    <button className='btn' value="." onClick={props.enterdNum} >.</button>
                    <button className='btn' onClick={props.answer}>=</button>
                </div>

          
            </div>  


        </div>
   </>
  )
}

export default Button