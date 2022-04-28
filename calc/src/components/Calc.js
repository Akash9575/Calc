import React, { useEffect, useState } from 'react'
import { evaluate } from 'mathjs';
import "./Calc.css"
import Button from './Button';


const Calc = () => {

    const [inputValue, setInputValue] = useState("");
    const [finalAnswer, setFinalAnswer] = useState("0");

    // const handleInpute = (e) => {
    //     setInputValue(document.getElementById("i1").value += e)

    // }

    // const handleAnswer = (e) => {
    //     document.getElementById("i2").value = e
    // }


    const plusle = () => {
        // handleInpute("+");
        setInputValue((oldvalue)=> {
            return oldvalue+"+"
        })
    }

    const minus = () => {
        // handleInpute("-");
        setInputValue((oldvalue)=> {
            return oldvalue+"-"
        })
    }

    const multiply = () => {
        // handleInpute("*");
        setInputValue((oldvalue)=> {
            return oldvalue+"*"
        })
    }

    const divide = () => {
        // handleInpute("/");
        setInputValue((oldvalue)=> {
            return oldvalue+"/"
        })
    }

    const leftbracket = () => {
        // handleInpute("(");
        setInputValue((oldvalue)=> {
            return oldvalue+"("
        })
    }

    const rightbracket = () => {
        // handleInpute(")");
        setInputValue((oldvalue)=> {
            return oldvalue+")"
        })
    }

    const factorial = () => {
        setInputValue((oldvalue)=> {
            return oldvalue+"!"
        })
    }

    const square = () => {
        setInputValue((oldvalue)=> {
            return `(  ${oldvalue} ) ^2  `
        })
    }

    const squareroot = () => {
        setInputValue((oldvalue)=> {
            return `(  ${oldvalue} ) ^(1/2)  `
        })
    }

    const log = () => {
        setInputValue((oldvalue)=> {
            return `log10(  ${oldvalue} )   `
        })
    }


    const backspace = () => {
        setInputValue(inputValue.slice(0,-1))
        // document.getElementById("i1").value = inputValue

    }
   

    const deleteAll = () => {
        setInputValue("")
        setFinalAnswer("")
    }

    const enterdNum = (e) => {
        console.log(e.target.value)
        // handleInpute(e.target.value);
        setInputValue((oldvalue)=> {
            return oldvalue+e.target.value
        })
    }

    const answer = () => {
        // handleAnswer(eval(inputValue))
        try {
            setFinalAnswer(evaluate(inputValue))
        }
        catch(err){
            setFinalAnswer(err.message)
        }
    }


  return (
    <>
        <Button 
        plusle={plusle}
        minus={minus}
        multiply={multiply}
        divide={divide}
        leftbracket={leftbracket}
        rightbracket={rightbracket}
        factorial={factorial}
        square={square}
        squareroot={squareroot}
        log={log}
        backspace={backspace}
        deleteAll={deleteAll}
        inputValue={inputValue}
        finalAnswer={finalAnswer}
        enterdNum={enterdNum}
        answer={answer}
        />


        {/* without passing button as an components and also we can use inpute filld to display the answer */}
        
        {/* <div className='calc'>
            <div className='calculator'>
           
                <div className='display'>
                    {inputValue? inputValue : "0"}

                </div>
                
                <div className='display'>
                    {finalAnswer? finalAnswer : "0"}
                </div>
                <div>
                <input className='inputFild' onChange={handleInpute} id="i1" disabled = {true}/>
                </div>
                <input className='inputFild' onChange={handleAnswer} id="i2" disabled={true}/>
           

                <div className='operator'>
                    <button className='btn' onClick={plusle}>+</button>
                    <button className='btn' onClick={minus} >-</button>
                    <button className='btn' onClick={multiply}>*</button>
                    <button className='btn' onClick={divide}>/</button>
                    <button className='btn' onClick={leftbracket}>(</button>
                    <button className='btn' onClick={rightbracket}>)</button>
                    <button className='btn' onClick={factorial}>!</button>
                    <button className='btn' onClick={square}>^2</button>
                    <button className='btn' onClick={squareroot}><sup>2</sup>√x</button>
                    <button className='btn' onClick={log}>log</button>
                    <button className='btn' onClick={backspace}>⌫</button>
                    <button className='btn' onClick={deleteAll}>AC</button>




                </div>
                <div className='number'>
                    {num()}
                    <button className='btn' value="." onClick={enterdNum} >.</button>
                    <button className='btn' onClick={answer}>=</button>

                    
                    <button className='btn' value="0" onClick={enterdNum} >0</button>
                    <button className='btn' value="1" onClick={enterdNum} >1</button>
                    <button className='btn' value="2" onClick={enterdNum}>2</button>
                    <button className='btn' value="3" onClick={enterdNum}>3</button>
                    <button className='btn' value="4" onClick={enterdNum}>4</button>
                    <button className='btn' value="5" onClick={enterdNum}>5</button>
                    <button className='btn' value="6" onClick={enterdNum}>6</button>
                    <button className='btn' value="7" onClick={enterdNum}>7</button>
                    <button className='btn' value="8" onClick={enterdNum}>8</button>
                    <button className='btn' value="9" onClick={enterdNum}>9</button>
                </div>

            </div>  


        </div>
     */}
    
    
    </>
  )
}

export default Calc